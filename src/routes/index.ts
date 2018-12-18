import express from 'express';

import userRouter from './user';
import rankRouter from './rank';
import versionRouter from './version';
import gameRouter from './game';
import recordRouter from './record';
import clubRouter from './club';
import preferenceRouter from './preference';
import noticeRouter from './notice';
import adRouter from './ad';

const router = express.Router();

router.use('/users', userRouter);
router.use('/ranks', rankRouter);
router.use('/version', versionRouter);
router.use('/games/:gameId', gameRouter);
router.use('/records', recordRouter);
router.use('/clubs', clubRouter);
router.use('/preferences', preferenceRouter);
router.use('/notice', noticeRouter);
router.use('/ads', adRouter);

export default router;
