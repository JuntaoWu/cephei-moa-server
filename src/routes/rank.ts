import { Request, Response, NextFunction } from "express";
import express from 'express';
import * as rankCtrl from '../controllers/rank.controller';

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/')
    /** GET /api/ranks - Get list of ranks */
    .get(rankCtrl.leaderBoard);

/** Load post when API with openId route parameter is hit */
//router.param('openId', rankCtrl.load);

export default router;
