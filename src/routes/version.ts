import { Request, Response, NextFunction } from "express";
import express from 'express';

import * as https from "https";

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/check')
    /** GET /version/check - Get latest version */
    .get((req: Request, res: Response, next: NextFunction) => {
        // todo: check version.
        var request = https.request({
            hostname: "dashboard.hzsdgames.com",
            port: 8088,
            path: `/version/check?appName=cephei-moa&version=${req.query.version || 0}`,
            method: "GET",
        }, (cepheiRes) => {
            console.log("response from dashboard api.");

            cepheiRes.on("data", (chunk: string) => {
                let data = JSON.parse(chunk);
                console.log(data);

                res.json(data);
            });
        });

        request.end();

        request.on("error", (data) => {
            res.json({
                error: true,
                message: data.message,
                data: {
                    hasUpdate: false
                }
            })
        });
    });

export default router;
