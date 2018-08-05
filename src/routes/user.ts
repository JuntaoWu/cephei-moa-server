import express from 'express';
var router = express.Router();
var http = require("http");
var https = require("https");

import * as userInfoCtrl from '../controllers/userinfo.controller';
import { Request, Response, NextFunction } from 'express';

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    var code = req.query["code"];

    if(!code) {
        return res.json({
            error: true,
            message: "No code provided",
            data: {}
        });
    }

    if(code == "debug") {
        return res.json({
            error: 0,
            message: "OK",
            data: {}
        });
    }

    var url = `https://api.weixin.qq.com/sns/jscode2session?appid=${req.app.get("appId")}&secret=${req.app.get("appSecret")}&js_code=${code}&grant_type=authorization_code`;

    console.log(url);

    var request = https.request({
        hostname: "api.weixin.qq.com",
        port: 443,
        path: `/sns/jscode2session?appid=${req.app.get("appId")}&secret=${req.app.get("appSecret")}&js_code=${code}&grant_type=authorization_code`,
        method: "GET",
    }, (wxRes) => {
        console.log("response from wx api.");

        wxRes.on("data", (chunk) => {
            let data = JSON.parse(chunk);
            console.log(data);

            try {
                const { openid, session_key } = data;

                if (!openid) {
                    return res.json({
                        error: true,
                        message: data.errmsg || "",
                        data: {}
                    })
                }

                userInfoCtrl.create({
                    openId: openid
                });

                res.json({
                    error: data.errcode || 0,
                    message: data.errmsg || "OK",
                    data: {
                        openId: openid,
                        sessionKey: session_key
                    }
                });
            }
            catch (ex) {
                res.json({
                    error: true,
                    message: ex.message,
                    data: {}
                });
            }

        });
    });

    request.end();

    request.on("error", (data) => {
        res.json({
            error: true,
            message: data.message,
            data: {}
        })
    });
});

router.post('/photon-login', (req: Request, res: Response, next: NextFunction) => {

    const openId = req.query.openId;

    if (!openId) {
        //Anonymous user login via photon custom auth.
        //Return a new random userId.
        return res.json({
            ResultCode: 1,
            UserId: (Math.random() * 100000).toFixed()
        });
    }

    userInfoCtrl.load(req.query).then((user) => {
        return res.json({
            ResultCode: user ? 1 : 2,
            UserId: user && user.openId
        });
    });
});

export default router;
