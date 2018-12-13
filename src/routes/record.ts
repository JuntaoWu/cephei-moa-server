import express from 'express';
var router = express.Router();
var http = require("http");
var https = require("https");
import passport from 'passport';

import * as recordCtrl from '../controllers/record.controller';
import { Request, Response, NextFunction } from 'express';

router.get('/', passport.authenticate("jwtWx"), recordCtrl.list);

router.post('/create', passport.authenticate("jwtWx"), recordCtrl.create);

// router.post('/insertManyTest', recordCtrl.insertManyTest);

export default router;
