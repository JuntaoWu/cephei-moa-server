import { Request, Response, NextFunction } from "express";
import express from 'express';
import * as levelInfoCtrl from '../controllers/levelinfo.controller';

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/')
    /** GET /api/levelInfos - Get list of levelInfos */
    .get((req: Request, res: Response, next: NextFunction) => {
        levelInfoCtrl.list(req.query)
            .then(levelInfos => { res.json(levelInfos); })
            .catch(next);
    })

    /** POST /api/levelInfos - Create new levelInfo */
    .post((req: Request, res: Response, next: NextFunction) => {
        levelInfoCtrl.create(req.body).then((levelInfo) => {
            res.json(levelInfo);
        });
    });

router.route('/:openId')
    /** GET /api/levelInfos/:openId - Get levelInfo */
    .get((req: Request, res: Response, next: NextFunction) => {
        levelInfoCtrl.load(req.params)
            .then(levelInfo => {
                res.json(levelInfo);
            })
            .catch(next);
    })

    /** POST /api/levelInfos/:openId - Update levelInfo */
    .post((req: Request, res: Response, next: NextFunction) => {
        levelInfoCtrl.update(req.params.openId, req.body.levelInfo).then((levelInfo) => {
            res.json(levelInfo);
        });
    })

    /** DELETE /api/levelInfos/:openId - Delete levelInfo */
    .delete((req: Request, res: Response, next: NextFunction) => {
        return levelInfoCtrl.remove(req.params);
    });

/** Load post when API with openId route parameter is hit */
//router.param('openId', levelInfoCtrl.load);

export default router;
