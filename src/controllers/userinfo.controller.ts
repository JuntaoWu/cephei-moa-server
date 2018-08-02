import UserInfoModel, { UserInfo } from '../models/userinfo.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';

export let load = async (params: any) => {
    return UserInfoModel.findOne({ openId: params.openId });
}

export let list = async (params: { limit?: number, skip?: number }) => {
    const { limit = 50, skip = 0 } = params;
    return await UserInfoModel.find()
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.userInfo);
}

export let create = async (body: any) => {
    if(!body || !body.openId) {
        return;
    }
    let existsItem = await UserInfoModel.findOne({ openId: body.openId });
    if (existsItem) {
        return existsItem;
    }
    const userInfo = new UserInfoModel(body);
    await userInfo.save();
    return UserInfoModel.findOne();
}

export let update = (openId, body: UserInfo) => {
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

