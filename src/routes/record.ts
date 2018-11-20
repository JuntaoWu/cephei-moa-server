import express from 'express';
var router = express.Router();
var http = require("http");
var https = require("https");
import passport from 'passport';

import * as recordCtrl from '../controllers/record.controller';
import { Request, Response, NextFunction } from 'express';

router.post('/', passport.authenticate("jwtWx"), recordCtrl.list);

router.post('/create', (req, res, next) => {
    console.log("create:", req.body);

    return recordCtrl.create(req.body)
        .then(savedRecord => {
            return recordCtrl.list(req, res, next);
        }).catch(e => {
            return res.json({
                error: true,
                message: "saving records failed",
            });
        });
});

export default router;
