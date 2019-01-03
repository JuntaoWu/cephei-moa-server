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

export default router;
