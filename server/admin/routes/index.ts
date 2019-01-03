import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../../config/param-validation';

import authRouter from './auth';
import dashboardRouter from './dashboard';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/dashboard', dashboardRouter);

export default router;
