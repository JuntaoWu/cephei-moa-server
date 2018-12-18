import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../config/param-validation';

const router = express.Router();

import * as rankCtrl from '../controllers/rank.controller';



router.route('/')
    /** GET /api/ranks - Get list of ranks */
    .get(rankCtrl.leaderBoard);

/** Load post when API with openId route parameter is hit */
//router.param('openId', rankCtrl.load);

// router.route('/updateManyTest')
//     .get(rankCtrl.updateManyTest);

export default router;
