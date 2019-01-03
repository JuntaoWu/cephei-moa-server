import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as passport from 'passport';
import * as http from 'http';
import * as https from 'https';
import * as validate from 'express-validation';
import paramValidation from '../../config/param-validation';

import authCtrl from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', passport.authenticate('localAdmin'), authCtrl.login);

router.post('/register', authCtrl.register);

router.delete('/logout', authCtrl.logout);

export default router;
