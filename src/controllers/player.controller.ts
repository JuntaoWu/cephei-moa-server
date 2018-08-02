import PlayerModel, { Player } from '../models/player.model';
import { Request, Response } from "express";
import { IncomingMessage } from 'http';

export let load = async (params: any) => {
    return PlayerModel.findOne({ openId: params.openId });
}

export let list = async (params: { limit?: number, skip?: number }) => {
    const { limit = 50, skip = 0 } = params;
    return await PlayerModel.find()
        .skip(+skip)
        .limit(+limit)
        .exec();
}

export let get = (req: Request, res: Response) => {
    return res.json(req.params.player);
}

export let create = async (body: any) => {
    if(!body || !body.openId) {
        return;
    }
    let existsItem = await PlayerModel.findOne({ openId: body.openId });
    if (existsItem) {
        return existsItem;
    }
    const player = new PlayerModel(body);
    await player.save();
    return PlayerModel.findOne();
}

export let update = (openId, body: Player) => {
    return load({openId: openId}).then((player) => {
        const tmp = player;
        player.level = body.level;
        player.money = body.money;
        player.achievInfo = body.achievInfo;
        player.achievScore = body.achievScore;
        player.battleMoneyAddition = body.battleMoneyAddition;
        player.buysGoods = body.buysGoods;
        player.canAdjustHeroes = body.canAdjustHeroes;
        player.canChooseCampList = body.canChooseCampList;
        player.collectHeroes = body.collectHeroes;
        player.experience = body.experience;
        player.fireMoneyAddition = body.fireMoneyAddition;
        player.gamesGetMoney = body.gamesGetMoney;
        player.gamesNum = body.gamesNum;
        player.gamesTime = body.gamesTime;
        player.gamesUseMoney = body.gamesUseMoney;
        player.heroesScore = body.heroesScore;
        player.initLoyalReduce = body.initLoyalReduce;
        player.initMoney = body.initMoney;
        player.initMoneyAdditionNeutral = body.initMoneyAdditionNeutral;
        player.initMoneyAdditionShu = body.initMoneyAdditionShu;
        player.initMoneyAdditionWei = body.initMoneyAdditionWei;
        player.initMoneyAdditionWu = body.initMoneyAdditionWu;
        player.isLocked = body.isLocked;
        player.level = body.level;
        player.money = body.money;
        player.passInfo = body.passInfo;
        player.point = body.point;
        player.prison = body.prison;
        player.speed = body.speed;
        player.teamLimit = body.teamLimit;
        player.startTime = body.startTime;
        player.currentAggregatePoints = body.currentAggregatePoints;
        player.passNoviceGuidance = body.passNoviceGuidance;
        player.tigerShaped = body.tigerShaped;
        player.tickets = body.tickets;
        player.additionalAdjustHeroes = body.additionalAdjustHeroes;
        player.initHeroesSima = body.initHeroesSima;
        player.experiencePool = body.experiencePool;
        player.achievements = body.achievements;
        return player.save();
    });
}

export let remove = (params: any) => {
    return load(params).then((player) => player.remove());
}

