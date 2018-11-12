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
const localWxGameLogin = new LocalStrategy(localWxGameOptions, (username, password, done) => {
    console.log("localWxGameLogin");

    if (!username) {
        return done(null, false, {
            message: "Your login details could not be verified. Please try again."
        });
    }

    const hostname = "api.weixin.qq.com";
    const path = `/sns/jscode2session?appid=${config.wx.appId}&secret=${config.wx.appSecret}&js_code=${username}&grant_type=authorization_code`;
    console.log(hostname, path);

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
                    return done(null, false);
                }

                let user = await WxUserModel.findOne({ wxgameOpenId: openid });

                if (!user || user.session_key != session_key) {
                    //note this is a temporary user model, do not save it now. Instead, we should save it later when get user info(for unionId).
                    user = new WxUserModel({
                        wxgameOpenId: openid,
                        session_key: session_key,
                    });
                }

                return done(null, user);
            }
            catch (ex) {
                done(null, false, {
                    message: ex.message || "Your login details could not be verified. Please try again."
                });
            }
        });
    });

    request.end();
});

// Setting up local NativeLogin (via App) strategy
const localNativeLogin = new LocalStrategy(localWxGameOptions, (username, password, done) => {
    console.log("localWxGameLoginMobile");

    if (!username) {
        return done(null, false, {
            message: "Your login details could not be verified. Please try again."
        });
    }

    const hostname = "api.weixin.qq.com";
    const path = `/sns/oauth2/access_token?appid=${config.wx.appIdMobile}&secret=${config.wx.appSecretMobile}&code=${username}&grant_type=authorization_code`;
    console.log(hostname, path);

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

                const { openid, unionid, access_token, refresh_token } = result;

                if (!openid) {
                    return done(null, false);
                }

                let user = await WxUserModel.findOne({ unionId: unionid });

                if (!user) {
                    user = new WxUserModel({
                        openId: openid,
                        unionid: unionid
                    });
                }
                else {

                }

                await user.save();

                return done(null, user);
            }
            catch (ex) {
                return done(null, false, {
                    message: ex.message || "Your login details could not be verified. Please try again."
                });
            }
        });
    });

    request.end();
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

    if(!payload.unionId) {
        return done(null, false);
    }

    WxUserModel.findOne({ unionId: payload.unionId }).then(user => {
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