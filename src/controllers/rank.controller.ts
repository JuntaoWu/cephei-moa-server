import RankModel, { Rank } from '../models/rank.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import WxUserModel, { WxUser } from '../models/wxuser.model';

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

