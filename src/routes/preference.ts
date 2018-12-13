import express from 'express';
var router = express.Router();
import passport from 'passport';
import paramValidation from '../config/param-validation';
import validate from 'express-validation';

import * as preferenceCtrl from '../controllers/preference.controller';
import { Request, Response, NextFunction } from 'express';

router.get('/', preferenceCtrl.list);

router.get('/:platform', validate(paramValidation.loadPreference), preferenceCtrl.load);

export default router;
