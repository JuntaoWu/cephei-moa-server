import WxUserModel, { WxUser } from '../models/wxuser.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';

import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';

import { config } from '../config/config';
import { APIError } from '../helpers/APIError';

export let load = async (params: any) => {
    return WxUserModel.findOne({ openId: params.openId });
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

export let authorizeWxGame = async (req, res, next) => {
    console.log("authorizeWxGame");
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