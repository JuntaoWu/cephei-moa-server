
import { Request, Response, NextFunction } from 'express';
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';
import * as httpStatus from 'http-status';

import { config } from '../../config/config';
import { APIError } from '../../helpers/APIError';
import AdminUserModel, { AdminUser } from '../models/admin-user.model';
import { hashSync } from 'bcrypt-nodejs';
import WxUserModel from '../../models/wxuser.model';
import * as moment from 'moment';
import GameModel from '../../models/game.model';
import RecordModel from '../../models/record.model';

export async function list(req: Request, res: Response, next: NextFunction) {

    const totalUser = await WxUserModel.count({});
    const totalRooms = await GameModel.count({});
    const totalAnonymousUser = await WxUserModel.count({ anonymous: true });
    const totalWxUser = +totalUser - (+totalAnonymousUser);

    const theDayBeforeOneWeek = moment().subtract(1, 'week').subtract(1, 'day').toDate();

    // const data = WxUserModel.aggregate([
    //     {
    //         $match: {
    //             registeredAt: { $gte: theDayBeforeOneWeek }
    //         }
    //     },
    //     {
    //         $group: {
    //             _id: { month: { $month: '$registeredAt' }, day: { $dayOfMonth: '$registeredAt' }, year: { $year: '$registeredAt' } },
    //             count: { $sum: 1 }
    //         }
    //     },
    //     { $sort: { '_id.year': -1, '_id.month': -1, '_id.day': -1 } },
    // ]);

    const dbCountNewUserResult = await WxUserModel.aggregate([
        {
            $match: {
                registeredAt: { $gte: theDayBeforeOneWeek }
            }
        },
        { $project: { registeredAt: { '$substr': ['$registeredAt', 0, 10] } } },
        { $group: { _id: '$registeredAt', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);

    const countNewUserData = dbCountNewUserResult.map(item => {
        const registeredAt = new Date(item._id);
        return {
            date: registeredAt,
            count: item.count,
            dayOfWeek: moment(registeredAt).weekday()
        };
    });

    const dbCountNewRoomResult = await GameModel.aggregate([
        {
            $match: {
                createdAt: { $gte: theDayBeforeOneWeek }
            }
        },
        { $project: { createdAt: { '$substr': ['$createdAt', 0, 10] } } },
        { $group: { _id: '$createdAt', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);

    const countNewRoomData = dbCountNewRoomResult.map(item => {
        const createdAt = new Date(item._id);
        return {
            date: createdAt,
            count: item.count,
            dayOfWeek: moment(createdAt).weekday()
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: {
            totalUser: totalUser,
            totalRooms: totalRooms,
            totalWxUser: totalWxUser,
            totalAnonymousUser: totalAnonymousUser,
            countNewUserData: countNewUserData,
            countNewRoomData: countNewRoomData,
        }
    });
}

export async function userList(req: Request, res: Response, next: NextFunction) {

    const totalUser = await WxUserModel.count({});
    const totalAnonymousUser = await WxUserModel.count({ anonymous: true });
    const totalWxUser = +totalUser - (+totalAnonymousUser);
    const totalWxUserMen = await WxUserModel.count({ gender: 1 });
    const totalWxUserWomen = +totalWxUser - (+totalWxUserMen);

    const { limit = 10, skip = 0 } = req.query;
    const data = await WxUserModel.find().limit(+limit).skip(+skip).exec();
    return res.json({
        code: 0,
        message: 'OK',
        data: {
            list: data,
            totalUser: totalUser,
            totalWxUser: totalWxUser,
            totalAnonymousUser: totalAnonymousUser,
            totalWxUserMen: totalWxUserMen,
            totalWxUserWomen: totalWxUserWomen,
        }
    });
}

export async function userDayStatistic(req: Request, res: Response, next: NextFunction) {
    
    const dbResult = await WxUserModel.aggregate([
        { $project: { registeredAt: { '$substr': ['$registeredAt', 0, 10] } } },
        { $group: { _id: '$registeredAt', count: { $sum: 1 } } },
        { $sort: { _id: -1 } }
    ]);

    const data = dbResult.map(item => {
        const registeredAt = new Date(item._id);
        return {
            registeredAt: registeredAt,
            count: item.count,
            dayOfWeek: moment(registeredAt).weekday()
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export async function userWeekStatistic(req: Request, res: Response, next: NextFunction) {
    
    const dbResult = await WxUserModel.aggregate([
        { $project: { registeredAt: 1 } },
        { $group: { _id: { 
            $subtract: [
                { $subtract: [ "$registeredAt", new Date("1970-01-01") ] },
                { $mod: [
                    { $subtract: [ "$registeredAt", new Date("1970-01-01") ] }, 1000 * 60 * 60 * 24 * 7
                ]}
            ]
          }, count: { $sum: 1 } } 
        },
        { $sort: { _id: -1 } }
    ]);

    const data = dbResult.map(item => {
        const registeredAt = new Date(item._id);
        return {
            registeredAt: registeredAt,
            count: item.count
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export async function userGames(req: Request, res: Response, next: NextFunction) {
    
    const totalUser = await WxUserModel.count({});
    const dbCountNewRoomResult = await GameModel.aggregate([
        { $project: { UserId: 1 } },
        { $group: { _id: '$UserId', count: { $sum: 1 } } }
    ]);
    let countRoomData = [];
    for (let i = 0; i < 10; i++) {
        countRoomData[i] = {
            games: i,
            count: 0
        }
    }
    dbCountNewRoomResult.forEach(item => {
        if (item.count < 10) {
            countRoomData[item.count].count += 1;
        }
        else if (item.count < 20) {
            if (!countRoomData[10]) {
                countRoomData[10] = {
                    games: '10-19',
                    count: 0
                }
            }
            countRoomData[10].count += 1;
        }
        else if (item.count < 30) {
            if (!countRoomData[11]) {
                countRoomData[11] = {
                    games: '20-29',
                    count: 0
                }
            }
            countRoomData[11].count += 1;
        }
        else {
            if (!countRoomData[12]) {
                countRoomData[12] = {
                    games: '30+',
                    count: 0
                }
            }
            countRoomData[12].count += 1;
        }
    });
    let count = 0;
    countRoomData.forEach(item => {
        count += +item.count;
    });
    countRoomData[0].count = +totalUser - count;
    return res.json({
        code: 0,
        message: 'OK',
        data: countRoomData
    });
}

export async function userMaps(req: Request, res: Response, next: NextFunction) {

    let id: string = '$province';
    if (req.query.type == 'city') {
        id = '$city';
    }
    const dbResult = await WxUserModel.aggregate([
        {
            $project: {
                province: 1,
                city: 1,
                men: {
                    $cond: {
                        if: {$eq: [1, "$gender"]},
                        then: 1,
                        else: 0
                    }
                },
                women: {
                    $cond: {
                        if: {$eq: [2, "$gender"]},
                        then: 1,
                        else: 0
                    }
                }
            }
        },
        { $group: { _id: id, count: { $sum: 1 }, men: { $sum: '$men' }, women: { $sum: '$women' } } },
    ]);
    const data = dbResult.map(item => {
        return {
            name: item._id,
            count: item.count,
            men: item.men,
            women: item.women
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export async function roomList(req: Request, res: Response, next: NextFunction) {
    const totalRoom = await GameModel.count({});
    const { limit = 10, skip = 0 } = req.query;
    const data = await GameModel.find().limit(+limit).skip(+skip).exec();

    const dbRecordResult = await RecordModel.aggregate([
        { $project: { 
            roomName: 1,
            winCount: {
                $cond: {
                    if: {$eq: [true, "$isWin"]},
                    then: 1,
                    else: 0
                }
            },
          } 
        },
        { $group: { _id: '$roomName', count: { $sum: 1 }, winCount: { $sum: '$winCount' } } },
        { $sort: { _id: -1 } }
    ]);

    const list = data.map(item => {
        let players = 0, winCamp = '';
        dbRecordResult.forEach(val => {
            if (item.GameId == val._id) {
                players = val.count;
                winCamp = val.winCount > 3 ? '许愿阵营' : '老朝奉阵营';
            }
        });
        return {
            GameId: item.GameId,
            Players: players,
            WinCamp: winCamp,
            GameStatus: item.Status,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        }
    })

    return res.json({
        code: 0,
        message: 'OK',
        data: {
            list: list,
            totalRoom: totalRoom,
            record: dbRecordResult
        }
    });
}

export async function roomDayStatistic(req: Request, res: Response, next: NextFunction) {
    
    const dbResult = await GameModel.aggregate([
        { $project: { createdAt: { '$substr': ['$createdAt', 0, 10] } } },
        { $group: { _id: '$createdAt', count: { $sum: 1 } } },
        { $sort: { _id: -1 } }
    ]);

    const data = dbResult.map(item => {
        const createdAt = new Date(item._id);
        return {
            createdAt: createdAt,
            count: item.count,
            dayOfWeek: moment(createdAt).weekday()
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export async function roomWeekStatistic(req: Request, res: Response, next: NextFunction) {
    
    const dbResult = await WxUserModel.aggregate([
        { $project: { createdAt: 1 } },
        { $group: { _id: { 
            $subtract: [
                { $subtract: [ "$createdAt", new Date("1970-01-01") ] },
                { $mod: [
                    { $subtract: [ "$createdAt", new Date("1970-01-01") ] }, 1000 * 60 * 60 * 24 * 7
                ]}
            ]
          }, count: { $sum: 1 } } 
        },
        { $sort: { _id: -1 } }
    ]);

    const data = dbResult.map(item => {
        const createdAt = new Date(item._id);
        return {
            createdAt: createdAt,
            count: item.count
        };
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export async function roomRate(req: Request, res: Response, next: NextFunction) {

    const dbRecordResult = await RecordModel.aggregate([
        { $project: { 
            roomName: 1,
            winCount: {
                $cond: {
                    if: {$eq: [true, "$isWin"]},
                    then: 1,
                    else: 0
                }
            },
          } 
        },
        { $group: { _id: '$roomName', count: { $sum: 1 }, winCount: { $sum: '$winCount' } } },
        { $sort: { _id: -1 } }
    ]);

    let obj = { all: { winXu: 0, winLao: 0 } };
    dbRecordResult.forEach(item => {
        if (!obj[item.count]) {
          obj[item.count] = { winXu: 0, winLao: 0 };
        }
        if (item.winCount > 3) {
            obj[item.count].winXu += 1;
            obj.all.winXu += 1;
        }
        else {
            obj[item.count].winLao += 1;
            obj.all.winLao += 1;
        }
    });

    return res.json({
        code: 0,
        message: 'OK',
        data: obj
    });
}

export async function cycleStatistic(req: Request, res: Response, next: NextFunction) {
    
    let groupId: string = "$hour";
    if (req.query.type == 'week') {
        groupId = "$dayOfWeek";
    }
    const dbUserResult = await WxUserModel.aggregate([
        { $project: { 
            hour: { $hour: "$registeredAt" },
            dayOfWeek: { $dayOfWeek: "$registeredAt" }
          } 
        },
        { $group: { _id: groupId, count: { $sum: 1 } } },
        { $sort: { _id: -1 } }
    ]);
    const dbRoomResult = await GameModel.aggregate([
        { $project: { 
            hour: { $hour: "$createdAt" },
            dayOfWeek: { $dayOfWeek: "$createdAt" }
          } 
        },
        { $group: { _id: groupId, count: { $sum: 1 } } },
        { $sort: { _id: -1 } }
    ]);

    const data = {
        user: dbUserResult.map(item => {
            return {
                registeredAt: item._id,
                count: item.count,
            };
        }),
        room: dbRoomResult.map(item => {
            return {
                createdAt: item._id,
                count: item.count,
            };
        }),
    };

    return res.json({
        code: 0,
        message: 'OK',
        data: data
    });
}

export default { 
    list, 
    userList, userDayStatistic, userWeekStatistic, userGames, userMaps, 
    roomList, roomDayStatistic, roomWeekStatistic, roomRate, 
    cycleStatistic
};
