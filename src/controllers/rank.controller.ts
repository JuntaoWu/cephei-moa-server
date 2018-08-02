import RankModel, { Rank } from '../models/rank.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';
import UserInfoModel from '../models/userinfo.model';

export let load = async (params: any) => {
    return RankModel.findOne({ openId: params.openId });
}

export let list = async (params: { limit?: number, skip?: number, condition?: string, order?: string }) => {
    const { limit = 10, skip = 0, condition = "collectScore", order = "desc" } = params;
    let existsCondition = {};
    existsCondition[condition] = { $ne: null };
    return await RankModel.find(existsCondition).sort(`${order == "desc" ? "-" : ""}${condition}`)
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.rank);
}

export let create = async (body: any) => {
    if (!body || !body.openId) {
        return;
    }
    let existsItem = await RankModel.findOne({ openId: body.openId });
    if (existsItem) {
        return existsItem;
    }
    const rank = new RankModel(body);
    await rank.save();
    return RankModel.findOne();
}

export let update = (openId, body: Rank) => {
    return load({ openId: openId }).then(async (rank) => {
        if (!rank.nickName || !rank.avatarUrl) {
            let userInfo = await UserInfoModel.findOne({ openId: openId });
            rank.nickName = userInfo.nickName;
            rank.avatarUrl = userInfo.avatarUrl;
        }
        const tmp = rank;
        if (body.collectScore && body.collectScore > (rank.collectScore || 0)) {
            rank.collectScore = body.collectScore;
        }
        if (body.points > (rank.points || 0)) {
            rank.points = body.points;
        }
        if (body.speed && (body.speed < rank.speed || !rank.speed)) {
            rank.speed = body.speed;
        }
        return rank.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((rank) => rank.remove());
}

