
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import CryptoJS, { AES, CipherOption } from 'crypto-js';

import { config } from '../config/config';
import { APIError } from '../helpers/APIError';
import WxUserModel, { WxUser } from '../models/wxuser.model';

export let load = async (params: any) => {
    return WxUserModel.findOne({ unionId: params.unionId });
}

export let list = async (params: { limit?: number, skip?: number }) => {
    const { limit = 50, skip = 0 } = params;
    return await WxUserModel.find()
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.userInfo);
}

export let create = async (body: any) => {
    if (!body || !body.openId) {
        return;
    }
    let existsItem = await WxUserModel.findOne({ openId: body.openId });
    if (existsItem && existsItem.session_key == body.session_key) {
        return existsItem;
    }
    const userInfo = new WxUserModel(body);
    await userInfo.save();
    return WxUserModel.findOne();
}

export let update = (openId, body: WxUser) => {
    return load({ openId: openId }).then((userInfo) => {
        const tmp = userInfo;
        userInfo.avatarUrl = body.avatarUrl;
        userInfo.city = body.city;
        userInfo.country = body.country;
        userInfo.gender = body.gender;
        userInfo.language = body.language;
        userInfo.nickName = body.nickName;
        userInfo.province = body.province;
        return userInfo.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((userInfo) => userInfo.remove());
}

export let loginWxGame = async (req, res, next) => {
    return login(req, res, next);
};

export let loginNative = async (req, res, next) => {
    return login(req, res, next);
};

export let authorizeWxGame = async (req: Request, res: Response, next: NextFunction) => {
    console.log("authorizeWxGame");
    console.log(req.body);

    // Check if user had been logged in WxGame.
    let user = await WxUserModel.findOne({ wxgameOpenId: req.body.wxgameOpenId }).catch((error) => {
        console.error(error);
        return undefined;
    });

    if (!user) {
        user = new WxUserModel(req.body);
    }

    if (!user.unionId) {
        let encryptedData = req.body.encryptedData;  //new Buffer(req.body.encryptedData, "base64");
        let sessionKey = CryptoJS.enc.Base64.parse(req.body.session_key.toString());  //new Buffer(user.session_key.toString(), "base64");
        let iv = CryptoJS.enc.Base64.parse(req.body.iv);  //new Buffer(req.body.iv, "base64");
        let result = AES.decrypt(encryptedData as any, sessionKey as any, {
            iv: iv as any,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);

        let decryptedData = JSON.parse(result);

        user.unionId = decryptedData.unionId;
    }

    // existing user from db.
    let existingUser = await WxUserModel.findOne({ unionId: user.unionId }).catch((error) => {
        console.error(error);
        return undefined;
    });

    // if user had been logged in 
    if (existingUser) {
        existingUser.wxgameOpenId = user.wxgameOpenId;
        existingUser.nickName = user.nickName;
        existingUser.gender = user.gender;
        existingUser.province = user.province;
        existingUser.city = user.city;
        existingUser.country = user.country;
        existingUser.avatarUrl = user.avatarUrl;
        await existingUser.save().catch((error) => {
            console.error(error);
            return undefined;
        });

        req.user = existingUser;
    }
    else {
        // create/update user now.
        await user.save().catch((error) => {
            console.error(error);
            return undefined;
        });
        req.user = user;
    }

    return login(req, res, next);
};

let login = (req, res, next) => {
    if (req.user) {
        const token = jwt.sign({
            wxgameOpenId: req.user.wxgameOpenId,
            nativeOpenId: req.user.nativeOpenId,
            unionId: req.user.unionId  // if we do not have unionId here, the token will not be any use.
        }, config.jwtSecret);

        return res.json({
            error: false,
            message: "OK",
            data: {
                token,
                wxgameOpenId: req.user.wxgameOpenId,
                nativeOpenId: req.user.nativeOpenId,
                unionId: req.user.unionId,
                session_key: req.user.session_key,
            }
        });
    }

    const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
    return next(err);
};

export default { loginWxGame, loginNative, authorizeWxGame, load };