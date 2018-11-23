import RankModel, { Rank } from '../models/rank.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import WxUserModel, { WxUser } from '../models/wxuser.model';
import _ from 'lodash';

export let leaderBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log("leaderBoard");

    let { skip, limit, mode, role, orderType, minimumCount } = req.query;

    skip = Math.max(0, (+skip || 0));
    limit = Math.max(0, (+limit || 100));
    mode = +mode || 0;
    role = +role || 0;
    orderType = orderType || "winRate";
    minimumCount = +minimumCount || 0;

    let sortBy = {};
    sortBy[orderType] = -1;
    sortBy[sortBy["winRate"] ? "countTotal" : "winRate"] = -1;
    let dbResult = await RankModel.aggregate([
        {
            $match: {
                $and: [
                    { mode: mode },
                    { role: role },
                    { countTotal: { $gte: minimumCount } }
                ]
            }
        },
        { $sort: sortBy },
        { $skip: skip },
        { $limit: limit },
        {
            $lookup: {
                from: "wxusers",
                localField: "userId",
                foreignField: "userId",
                as: "fromUsers"
            }
        },
        {
            $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$fromUsers", 0] }, "$$ROOT"] } }
        },
        { $project: { fromUsers: 0 } }
    ]);

    return res.json({
        error: false,
        message: "OK",
        data: dbResult.map((rank, index) => {
            return {
                userId: rank.userId,
                nickName: rank.nickName || (rank.registeredAt ? "" : "游客"),
                avatarUrl: rank.avatarUrl || "",
                mode: rank.mode || 0,
                role: rank.role || 0,
                countTotal: rank.countTotal || 0,
                countWin: rank.countWin || 0,
                winRate: rank.winRate || 0
            };
        })
    });
};

export let updateManyTest = async (req: Request, res: Response, next: NextFunction) => {

    let records = [
        { userId: 200051, mode: 8, role: 1, isWin: true },
        { userId: 200052, mode: 8, role: 2, isWin: true },
        { userId: 200053, mode: 8, role: 3, isWin: true },
        { userId: 200054, mode: 8, role: 4, isWin: true },
        { userId: 200055, mode: 8, role: 5, isWin: true },
        { userId: 200056, mode: 8, role: 6, isWin: false },
        { userId: 200057, mode: 8, role: 7, isWin: false },
        { userId: 200058, mode: 8, role: 8, isWin: false },
    ];

    let existingRanks = await RankModel.find({
        userId: { $in: records.map(record => record.userId) }
    });

    let updates = _(records).flatMap(record => {
        let rank00 = existingRanks.find(er => er.mode == 0 && er.role == 0);
        let winRate00 = (+rank00.countWin + (record.isWin ? 1 : 0)) / (+rank00.countTotal + 1);

        let rank0r = existingRanks.find(er => er.mode == 0 && er.role == record.role);
        let winRate0r = (+rank00.countWin + (record.isWin ? 1 : 0)) / (+rank00.countTotal + 1);

        let rankm0 = existingRanks.find(er => er.mode == record.role && er.role == 0);
        let winRatem0 = (+rank00.countWin + (record.isWin ? 1 : 0)) / (+rank00.countTotal + 1);

        let rankmr = existingRanks.find(er => er.mode == record.mode && er.role == record.role);
        let winRatemr = (+rank00.countWin + (record.isWin ? 1 : 0)) / (+rank00.countTotal + 1);
        return [
            {
                updateOne: {
                    filter: { userId: record.userId, mode: 0, role: 0 },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1, winRate: winRate00 } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: record.mode, role: 0 },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1, winRate: winRate0r } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: 0, role: record.role },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1, winRate: winRatem0 } },
                    upsert: true
                }
            },
            {
                updateOne: {
                    filter: { userId: record.userId, mode: record.mode, role: record.role },
                    update: { $inc: { countWin: record.isWin ? 1 : 0, countTotal: 1, winRate: winRatemr } },
                    upsert: true
                }
            }
        ]
    }).value();

    let bulkWriteResult = await RankModel.collection.bulkWrite(updates);

    console.log(bulkWriteResult);

    let dbResult = await RankModel.find({ userId: { $in: records.map(record => record.userId) } });
    return res.json({
        error: false,
        message: "OK",
        data: dbResult
    });
};

export default { leaderBoard, updateManyTest };
