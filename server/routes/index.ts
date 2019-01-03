import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../config/param-validation';

const router = express.Router();

import userRouter from './user';
import rankRouter from './rank';
import versionRouter from './version';
import gameRouter from './game';
import recordRouter from './record';
import clubRouter from './club';
import preferenceRouter from './preference';
import noticeRouter from './notice';
import adRouter from './ad';
import gameIconRouter from './gameicon';
import sharedRouter from './shared';

router.use('/users', userRouter);
router.use('/ranks', rankRouter);
router.use('/version', versionRouter);
router.use('/games/:gameId', gameRouter);
router.use('/records', recordRouter);
router.use('/clubs', clubRouter);
router.use('/preferences', preferenceRouter);
router.use('/notice', noticeRouter);
router.use('/ads', adRouter);
router.use('/gameIcons', gameIconRouter);
router.use('/shared', sharedRouter);

export default router;
