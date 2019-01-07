
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
    const { limit = 10, skip = 0 } = req.query;
    const data = await WxUserModel.find().limit(+limit).skip(+skip).exec();
    return res.json({
        code: 0,
        message: 'OK',
        data: data
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

export default { list, userList, userDayStatistic };
