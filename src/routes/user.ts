import express from 'express';
var router = express.Router();
var http = require("http");
var https = require("https");

import * as playerCtrl from '../controllers/player.controller';
import * as nodesInfoCtrl from '../controllers/nodesinfo.controller';
import * as levelInfoCtrl from '../controllers/levelinfo.controller';
import * as userInfoCtrl from '../controllers/userinfo.controller';
import * as rankCtrl from '../controllers/rank.controller';
import { Request, Response, NextFunction } from 'express';
import { Player } from '../models/player.model';

const defaultPlayerInfo = {
    openId: "default-openId",
    level: 0,
    money: 100,
    initMoney: 100,
    initMoneyAdditionShu: 0,
    initMoneyAdditionWu: 0,
    initMoneyAdditionWei: 0,
    initMoneyAdditionNeutral: 0,
    experience: 0,
    battleMoneyAddition: 0,
    fireMoneyAddition: 0,
    initLoyalReduce: 0,
    isLocked: true,
    canAdjustHeroes: false,
    prison: [
        { isLocked: false, hero: null, price: 0 }
        , { isLocked: false, hero: null, price: 0 }
        , { isLocked: true, hero: null, price: 0 }
        , { isLocked: true, hero: null, price: 0 }
        , { isLocked: true, hero: null, price: 20 }
        , { isLocked: true, hero: null, price: 20 }
        , { isLocked: true, hero: null, price: 20 }
    ],
    passInfo: [],
    achievInfo: [],
    gamesTime: 0,
    gamesNum: 0,
    gamesGetMoney: 0,
    gamesUseMoney: 0,
    collectHeroes: [],
    buysGoods: [],
    heroesScore: 0,
    achievScore: 0,
    point: 0,
    currentAggregatePoints: 0,
    speed: 0,
    teamLimit: 20,
    canChooseCampList: [],
    startTime: null,
    passNoviceGuidance: false,
    tigerShaped: 0,
    tickets: {},
    additionalAdjustHeroes: false,
    initHeroesSima: [],
    experiencePool: 0,
    achievements: []
};

const defaultNodes = [

];

const defaultLevelInfo = {
    currentChapter: 1,
    currentLevel: {},
    currentBattle: {},
    currentPath: [],
    currentHeroes: [],
    currentCamp: 1,
}

/* POST user info. */
router.post('/info', async (req: Request, res: Response, next: NextFunction) => {

    var openId = req.query.openId;

    var error = 0;
    var message = "OK";
    let player: any = defaultPlayerInfo;
    let nodesInfo: any = defaultNodes;
    let levelInfo: any = defaultLevelInfo;
    if (!openId) {
        error = 1001;
        message = "No openId provided";
    }
    else {
        userInfoCtrl.update(openId, req.body.userInfo);
        player = await playerCtrl.load({ openId: openId });
        nodesInfo = await nodesInfoCtrl.load({ openId: openId });
        levelInfo = await levelInfoCtrl.load({ openId: openId });
    }

    res.json({
        error: error,
        message: message,
        data: {
            openId: openId,
            playerInfo: player,
            nodes: nodesInfo,
            levelInfo: levelInfo,
        }
    });
});

router.post('/login', function (req, res, next) {
    var code = req.query["code"];

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
                        message: data.message,
                        data: {}
                    })
                }

                userInfoCtrl.create({
                    openId: openid
                });

                playerCtrl.create({
                    ...defaultPlayerInfo,
                    openId: openid,
                });

                nodesInfoCtrl.create({
                    openId: openid
                });

                levelInfoCtrl.create({
                    openId: openid
                });

                rankCtrl.create({
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

export default router;
