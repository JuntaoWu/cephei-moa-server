
import { Request, Response, NextFunction } from 'express';
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';
import * as httpStatus from 'http-status';

import { config } from '../../config/config';
import { APIError } from '../../helpers/APIError';
import AdminUserModel, { AdminUser } from '../models/admin-user.model';
import { hashSync } from 'bcrypt-nodejs';

export async function login(req: Request, res: Response, next: NextFunction) {
    const user: AdminUser = req.user;
    const token = jwt.sign({
        email: user.email,
        nickName: user.nickName,
        avatarUrl: user.avatarUrl,
    }, config.admin.jwtSecret);

    return res.json({
        code: 0,
        message: 'OK',
        data: {
            token: token
        }
    });
}

export async function register(req: Request, res: Response, next: NextFunction) {
    const user = new AdminUserModel({
        email: req.body.email,
        nickName: req.body.fullName,
        passwordHash: hashSync(req.body.password)
    });
    await user.save();

    req.user = user;

    return login(req, res, next);
}

export async function logout(req: Request, res: Response, next: NextFunction) {
    return res.json({
        url: '/admin/auth/login'
    });
}

export default { login, register, logout };
