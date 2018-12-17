import express from 'express';
var router = express.Router();
import passport from 'passport';

import * as adCtrl from '../controllers/ad.controller';
import { Request, Response, NextFunction } from 'express';

router.get('/', adCtrl.list);

export default router;
