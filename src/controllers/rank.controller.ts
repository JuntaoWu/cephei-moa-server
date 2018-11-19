import RankModel, { Rank } from '../models/rank.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import WxUserModel, { WxUser } from '../models/wxuser.model';

export let leaderBoard = async (req: Request, res: Response, next: NextFunction) => {
    console.log("leaderBoard");

    let { skip, limit, mode, role, orderType } = req.query;

    skip = Math.max(0, (+skip || 0));
    limit = Math.max(0, (+limit || 100));
    mode = +mode || 0;
    role = +role || 0;
    orderType = orderType || "winRate";

    let sortBy = {};
    sortBy[orderType] = -1;
    sortBy[sortBy["winRate"] ? "countTotal" : "winRate"] = -1;
    let dbResult = await RankModel.aggregate([
        {
            $match: { $and: [{ mode: mode }, { role: role }] }
        },
        { $sort: sortBy },
        { $skip: 0 },
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
                nickName: rank.nickName || "",
                avatarUrl: rank.avatarUrl || "",
                countTotal: rank.countTotal || 0,
                winRate: rank.winRate || 0
            };
        })
    });
};

