import express from 'express';
var router = express.Router();
import passport from 'passport';

import * as noticeCtrl from '../controllers/notice.controller';
import { Request, Response, NextFunction } from 'express';

router.get('/', noticeCtrl.list);

export default router;
