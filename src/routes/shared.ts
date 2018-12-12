import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import sharedCtrl from '../controllers/shared.controller';
import paramValidation from '../config/param-validation';
import validate from 'express-validation';

const router = express.Router();

router.get('/:unionId',
    validate(paramValidation.getShared),
    passport.authenticate("jwtService"),
    sharedCtrl.load);

export default router;
