import { Request, Response, NextFunction } from "express";
import express from 'express';
import * as nodesInfoCtrl from '../controllers/nodesinfo.controller';

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/')
    /** GET /api/nodesInfos - Get list of nodesInfos */
    .get((req: Request, res: Response, next: NextFunction) => {
        nodesInfoCtrl.list(req.query)
            .then(nodesInfos => { res.json(nodesInfos); })
            .catch(next);
    })

    /** POST /api/nodesInfos - Create new nodesInfo */
    .post((req: Request, res: Response, next: NextFunction) => {
        nodesInfoCtrl.create(req.body).then((nodesInfo) => {
            res.json(nodesInfo);
        });
    });

router.route('/:openId')
    /** GET /api/nodesInfos/:openId - Get nodesInfo */
    .get((req: Request, res: Response, next: NextFunction) => {
        nodesInfoCtrl.load(req.params)
            .then(nodesInfo => {
                res.json(nodesInfo);
            })
            .catch(next);
    })

    /** POST /api/nodesInfos/:openId - Update nodesInfo */
    .post((req: Request, res: Response, next: NextFunction) => {
        nodesInfoCtrl.update(req.params.openId, req.body).then((nodesInfo) => {
            res.json(nodesInfo);
        });
    })

    /** DELETE /api/nodesInfos/:openId - Delete nodesInfo */
    .delete((req: Request, res: Response, next: NextFunction) => {
        return nodesInfoCtrl.remove(req.params);
    });

/** Load post when API with openId route parameter is hit */
//router.param('openId', nodesInfoCtrl.load);

export default router;
