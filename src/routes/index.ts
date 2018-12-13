import express from 'express';

import userRouter from './user';
import rankRouter from './rank';
import versionRouter from './version';
import gameRouter from './game';
import recordRouter from './record';
import clubRouter from './club';

const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/users', userRouter);
router.use('/ranks', rankRouter);
router.use('/version', versionRouter);
router.use('/games/:gameId', gameRouter);
router.use('/records', recordRouter);
router.use('/clubs', clubRouter);

export default router;
