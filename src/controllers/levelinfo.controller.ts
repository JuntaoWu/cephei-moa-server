import LevelInfoModel, { LevelInfo } from '../models/levelinfo.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';

export let load = async (params: any) => {
    return LevelInfoModel.findOne({ openId: params.openId });
}

export let list = async (params: { limit?: number, skip?: number }) => {
    const { limit = 50, skip = 0 } = params;
    return await LevelInfoModel.find()
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.levelInfo);
}

export let create = async (body: any) => {
    if(!body || !body.openId) {
        return;
    }
    let existsItem = await LevelInfoModel.findOne({ openId: body.openId });
    if (existsItem) {
        return existsItem;
    }
    const levelInfo = new LevelInfoModel(body);
    await levelInfo.save();
    return LevelInfoModel.findOne();
}

export let update = (openId: string, body: LevelInfo) => {
    return load({ openId: openId }).then((levelInfo) => {
        const tmp = levelInfo;
        levelInfo.currentChapter = body.currentChapter;
        levelInfo.currentLevel = body.currentLevel;
        levelInfo.currentBattle = body.currentBattle;
        levelInfo.currentPath = body.currentPath;
        levelInfo.currentCamp = body.currentCamp;
        levelInfo.currentHeroes = body.currentHeroes;
        return levelInfo.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((levelInfo) => levelInfo.remove());
}

