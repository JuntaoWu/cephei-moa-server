import express from 'express';
var router = express.Router();
var http = require("http");
var https = require("https");

import * as recordCtrl from '../controllers/record.controller';
import { Request, Response, NextFunction } from 'express';

router.post('/', (req, res, next) => {
    console.log("list:", req.query);
    return recordCtrl.list(req.query)
        .then(records => {

            let countTotal = records.length;
            let countWin = records.filter(m => m.isWin).length;
            let count6Total = records.filter(m => m.gameType == 6).length;
            let count7Total = records.filter(m => m.gameType == 7).length;
            let count8Total = records.filter(m => m.gameType == 8).length;
            let count6Win = records.filter(m => m.gameType == 6 && m.isWin).length;
            let count7Win = records.filter(m => m.gameType == 7 && m.isWin).length;
            let count8Win = records.filter(m => m.gameType == 8 && m.isWin).length;
            let countXuyuanTotal = records.filter(m => m.camp == 1).length;
            let countLaoChaofengTotal = records.filter(m => m.camp == 2).length;
            let countXuYuanWin = records.filter(m => m.camp == 1 && m.isWin).length;
            let countLaoChaofengWin = records.filter(m => m.camp == 2 && m.isWin).length;

            return res.json({
                error: false,
                message: "OK",
                data: {
                    countTotal, countWin, count6Total, count7Total, count8Total, count6Win, count7Win, count8Win, countXuyuanTotal, countLaoChaofengTotal, countXuYuanWin, countLaoChaofengWin
                }
            });
        })
        .catch(e => next(e));
});

router.post('/create', (req, res, next) => {
    console.log("create:", req.body);

    return recordCtrl.create(req.body)
        .then(savedRecord => {
            recordCtrl.list(req.query)
                .then(records => {

                    let countTotal = records.length;
                    let countWin = records.filter(m => m.isWin).length;
                    let count6Total = records.filter(m => m.gameType == 6).length;
                    let count7Total = records.filter(m => m.gameType == 7).length;
                    let count8Total = records.filter(m => m.gameType == 8).length;
                    let count6Win = records.filter(m => m.gameType == 6 && m.isWin).length;
                    let count7Win = records.filter(m => m.gameType == 7 && m.isWin).length;
                    let count8Win = records.filter(m => m.gameType == 8 && m.isWin).length;
                    let countXuyuanTotal = records.filter(m => m.camp == 1).length;
                    let countLaoChaofengTotal = records.filter(m => m.camp == 2).length;
                    let countXuYuanWin = records.filter(m => m.camp == 1 && m.isWin).length;
                    let countLaoChaofengWin = records.filter(m => m.camp == 1 && m.isWin).length;

                    return res.json({
                        error: false,
                        message: "OK",
                        data: {
                            countTotal, countWin, count6Total, count7Total, count8Total, count6Win, count7Win, count8Win, countXuyuanTotal, countLaoChaofengTotal, countXuYuanWin, countLaoChaofengWin
                        }
                    });
                })
                .catch(e => next(e));
        }).catch(e => {
            return res.json({
                error: true,
                message: "saving records failed",
            });
        });
});

export default router;
