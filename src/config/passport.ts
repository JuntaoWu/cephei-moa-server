import * as passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

import config from './config';
import WxUserModel, { WxUser } from '../models/wxuser.model';

import * as https from 'https';

const localWxGameOptions = {
    usernameField: 'code',
    passwordField: 'code',
};

// Setting up local WxGameLogin strategy
const localWxGameLogin = new LocalStrategy(localWxGameOptions, async (username, password, done) => {
    console.log("localWxGameLogin");

    if (!username) {
        return done(null, false, {
            message: "Your login details could not be verified. Please try again."
        });
    }

    let user = await getWxGameOpenIdAsync(username).catch(error => {
        console.error(error);
        return undefined;
    });

    if (user) {
        return done(null, user);
    }

    return done(null, false);
});

const getWxGameOpenIdAsync = async (code: string): Promise<any> => {
    const hostname = "api.weixin.qq.com";
    const path = `/sns/jscode2session?appid=${config.wx.appId}&secret=${config.wx.appSecret}&js_code=${code}&grant_type=authorization_code`;
    console.log(hostname, path);

    return new Promise((resolve, reject) => {
        let request = https.request({
            hostname: hostname,
            port: 443,
            path: path,
            method: "GET",
        }, (wxRes) => {
            console.log("response from wx api.");

            let data = "";
            wxRes.on("data", (chunk) => {
                data += chunk;
            });

            wxRes.on("end", async () => {
                try {
                    let result = JSON.parse(data);
                    const { openid, session_key } = result;

                    if (!openid) {
                        return reject(result);
                    }

                    let user = await WxUserModel.findOne({ wxgameOpenId: openid });

                    if (!user || user.session_key != session_key) {
                        //note this is a temporary user model, do not save it now. Instead, we should save it later when get user info(for unionId).
                        user = new WxUserModel({
                            wxgameOpenId: openid,
                            session_key: session_key,
                        });
                    }
                    return resolve(user);
                }
                catch (ex) {
                    return reject(ex);
                }
            });
        });

        request.end();
    });
};

const getNativeAccessTokenAsync = async (code: string): Promise<any> => {
    const hostname = "api.weixin.qq.com";
    const path = `/sns/oauth2/access_token?appid=${config.wx.appIdMobile}&secret=${config.wx.appSecretMobile}&code=${code}&grant_type=authorization_code`;
    console.log(hostname, path);

    return new Promise((resolve, reject) => {
        let request = https.request({
            hostname: hostname,
            port: 443,
            path: path,
            method: "GET",
        }, (wxRes) => {
            console.log("response from wx api.");

            let data = "";
            wxRes.on("data", (chunk) => {
                data += chunk;
            });

            wxRes.on("end", async () => {
                try {
                    let result = JSON.parse(data);

                    const { openid } = result;

                    if (!openid) {
                        return reject(result);
                    }
                    else {
                        return resolve(result);
                    }
                } catch (ex) {
                    return reject(ex);
                }
            });
        });

        request.end();
    });
};

const getNativeUserInfoAsync = async (accessToken: string, openId: string): Promise<any> => {
    const hostname = "api.weixin.qq.com";
    const userInfoPath = `/sns/userinfo?access_token=${accessToken}&openid=${openId}`;
    console.log(hostname, userInfoPath);

    return new Promise((resolve, reject) => {
        let request = https.request({
            hostname: hostname,
            port: 443,
            path: userInfoPath,
            method: "GET",
        }, (wxRes) => {
            console.log("response from wx api /sns/userinfo.");
            let userInfoData = "";
            wxRes.on("data", (chunk) => {
                userInfoData += chunk;
            });
            wxRes.on("end", async () => {

                try {
                    let result = JSON.parse(userInfoData);

                    let { openid, unionid, nickname, sex, province, city, country, headimgurl } = result;
                    if (!openid) {
                        return reject(result);
                    }
                    else {
                        let user = {
                            nativeOpenId: openid,
                            unionId: unionid,
                            nickName: nickname,
                            gender: sex,
                            province: province,
                            city: city,
                            country: country,
                            avatarUrl: headimgurl,
                        };

                        return resolve(user);
                    }
                }
                catch (ex) {
                    return reject(ex);
                }
            });
        });

        request.end();
    });
};

// Setting up local NativeLogin (via App) strategy
const localNativeLogin = new LocalStrategy(localWxGameOptions, async (username, password, done) => {
    console.log("localNativeLogin");

    if (!username) {
        return done(null, false, {
            message: "Your login details could not be verified. Please try again."
        });
    }

    let accessToken = await getNativeAccessTokenAsync(username).catch(error => {
        console.error(error);
        return null;
    });

    const { openid, access_token, refresh_token } = accessToken;

    if (!openid) {
        return done(null, false);
    }

    let user = await getNativeUserInfoAsync(access_token, openid).catch(error => {
        console.error(error);
        return null;
    });

    if (user && user.unionId) {
        return done(null, user);
    }

    return done(null, false);
});

// Setting JWT strategy options
const jwtOptions = {
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter("token"),
    // Telling Passport where to find the secret
    secretOrKey: config.jwtSecret
    // TO-DO: Add issuer and audience checks
};

const jwtWxLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    console.log("jwt payload", payload);

    if (!payload.userId) {
        return done(null, false);
    }

    WxUserModel.findOne({ userId: payload.userId }).then(user => {
        console.log("userId, type" + (typeof user.userId));
        done(null, user);
    }).catch(error => {
        done(null, false);
    });
});

(passport as any).default.serializeUser(function (user, done) {
    done(null, user);
});

(passport as any).default.deserializeUser(function (user, done) {
    done(null, user);
});

(passport as any).default.use("jwtWx", jwtWxLogin);
(passport as any).default.use("localWxGame", localWxGameLogin);
(passport as any).default.use("localNative", localNativeLogin);

export default passport;