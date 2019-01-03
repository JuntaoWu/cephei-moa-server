import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../config/param-validation';

const router = express.Router();

import * as recordCtrl from '../controllers/record.controller';

router.get('/', passport.authenticate("jwtWx"), recordCtrl.list);

router.post('/create', passport.authenticate("jwtWx"), recordCtrl.create);

// router.post('/insertManyTest', recordCtrl.insertManyTest);

export default router;
