import express from 'express';
var router = express.Router();
import passport from 'passport';

import * as clubCtrl from '../controllers/club.controller';
import { Request, Response, NextFunction } from 'express';

router.get('/', clubCtrl.list);

export default router;
