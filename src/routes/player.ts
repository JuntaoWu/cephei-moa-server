import { Request, Response, NextFunction } from "express";
import express from 'express';
import * as playerCtrl from '../controllers/player.controller';
import * as userCtrl from '../controllers/userinfo.controller';
import * as rankCtrl from '../controllers/rank.controller';
import { Rank } from "../models/rank.model";
import { Player } from "../models/player.model";

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/')
    /** GET /api/players - Get list of players */
    .get((req: Request, res: Response, next: NextFunction) => {
        playerCtrl.list(req.query)
            .then(players => { res.json(players); })
            .catch(next);
    })

    /** POST /api/players - Create new player */
    .post((req: Request, res: Response, next: NextFunction) => {
        playerCtrl.create(req.body).then((player) => {
            res.json(player);
        });
    });

router.route('/:openId')
    /** GET /api/players/:openId - Get player */
    .get((req: Request, res: Response, next: NextFunction) => {
        playerCtrl.load(req.params)
            .then(player => {
                res.json(player);
            })
            .catch(next);
    })

    /** POST /api/players/:openId - Update player */
    .post(async (req: Request, res: Response, next: NextFunction) => {
        playerCtrl.update(req.params.openId, req.body.playerInfo).then((player) => {
            res.json(player);
        });
        let playerInfo = req.body.playerInfo as Player;
        rankCtrl.update(req.params.openId, {
            collectScore: <any>(playerInfo.heroesScore || 0) + <any>(playerInfo.achievScore || 0),
            points: playerInfo.point,
            speed: playerInfo.speed
        } as Rank);
    })

    /** DELETE /api/players/:openId - Delete player */
    .delete((req: Request, res: Response, next: NextFunction) => {
        return playerCtrl.remove(req.params);
    });

/** Load post when API with openId route parameter is hit */
//router.param('openId', playerCtrl.load);

export default router;
