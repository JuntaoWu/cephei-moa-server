import { Request, Response, NextFunction } from "express";
import express from 'express';
import * as rankCtrl from '../controllers/rank.controller';

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/')
    /** GET /api/ranks - Get list of ranks */
    .get((req: Request, res: Response, next: NextFunction) => {
        rankCtrl.list(req.query)
            .then(ranks => {
                let result = ranks.map(rank => {
                    return {
                        openId: rank.openId,
                        avatarUrl: rank.avatarUrl,
                        nickName: rank.nickName,
                        collectScore: rank.collectScore,
                        points: rank.points,
                        speed: rank.speed,
                    };
                });
                res.json(result);
            })
            .catch(next);
    });

router.route('/:openId')
    /** GET /api/ranks/:openId - Get rank */
    .get((req: Request, res: Response, next: NextFunction) => {
        rankCtrl.load(req.params)
            .then(rank => {
                res.json(rank);
            })
            .catch(next);
    })
    /** DELETE /api/ranks/:openId - Delete rank */
    .delete((req: Request, res: Response, next: NextFunction) => {
        return rankCtrl.remove(req.params);
    });

/** Load post when API with openId route parameter is hit */
//router.param('openId', rankCtrl.load);

export default router;
