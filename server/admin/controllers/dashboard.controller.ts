
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

export async function list(req: Request, res: Response, next: NextFunction) {

    const dateBeforeOneWeek = moment().subtract(1, 'week').toDate();

    // const data = WxUserModel.aggregate([
    //     {
    //         $match: {
    //             registeredAt: { $gt: dateBeforeOneWeek }
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

    const dbResult = await WxUserModel.aggregate([
        {
            $match: {
                registeredAt: { $gt: dateBeforeOneWeek }
            }
        },
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

export default { list };
