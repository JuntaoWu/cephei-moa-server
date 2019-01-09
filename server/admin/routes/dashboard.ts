import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../../config/param-validation';

import dashboardCtrl from '../controllers/dashboard.controller';

const router = express.Router();

router.get('/', passport.authenticate('jwtAdmin'), dashboardCtrl.list);

router.get('/userList', passport.authenticate('jwtAdmin'), dashboardCtrl.userList);
router.get('/userDayStatistic', passport.authenticate('jwtAdmin'), dashboardCtrl.userDayStatistic);
router.get('/userWeekStatistic', passport.authenticate('jwtAdmin'), dashboardCtrl.userWeekStatistic);
router.get('/userGames', passport.authenticate('jwtAdmin'), dashboardCtrl.userGames);
router.get('/userMaps', passport.authenticate('jwtAdmin'), dashboardCtrl.userMaps);

router.get('/roomList', passport.authenticate('jwtAdmin'), dashboardCtrl.roomList);
router.get('/roomDayStatistic', passport.authenticate('jwtAdmin'), dashboardCtrl.roomDayStatistic);
router.get('/roomWeekStatistic', passport.authenticate('jwtAdmin'), dashboardCtrl.roomWeekStatistic);
router.get('/roomRate', passport.authenticate('jwtAdmin'), dashboardCtrl.roomRate);

router.get('/cycleStatistic', passport.authenticate('jwtAdmin'), dashboardCtrl.cycleStatistic);

export default router;
