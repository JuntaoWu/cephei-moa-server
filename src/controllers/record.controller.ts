import RecordModel, { Record } from '../models/record.model';
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import RankModel from '../models/rank.model';
import _ from "lodash";

export let list = async (req: Request, res: Response, next: NextFunction) => {

    console.log("Finding records, type:", typeof req.user.userId, req.user.userId);
    let myRank = await RankModel.find({ userId: +req.user.userId });
    console.log(myRank);

    let total = myRank.find(rank => rank.mode == 0 && rank.role == 0);
    let countTotal = total && total.countTotal || 0;
    let countWin = total && total.countWin || 0;

    let total6 = myRank.find(rank => rank.mode == 6 && rank.role == 0);
    let count6Total = total6 && total6.countTotal || 0;
    let count6Win = total6 && total6.countWin || 0;

    let total7 = myRank.find(rank => rank.mode == 7 && rank.role == 0);
    let count7Total = total7 && total7.countTotal || 0;
    let count7Win = total7 && total7.countWin || 0;

    let total8 = myRank.find(rank => rank.mode == 8 && rank.role == 0);
    let count8Total = total8 && total8.countTotal || 0;
    let count8Win = total8 && total8.countWin || 0;

    let countXuyuanTotal = _(myRank.filter(rank => rank.mode == 0 && rank.role > 0 && rank.role <= 5)).sumBy("countTotal");
    let countLaoChaofengTotal = _(myRank.filter(rank => rank.mode == 0 && rank.role > 5 && rank.role <= 8)).sumBy("countTotal");
    let countXuYuanWin = _(myRank.filter(rank => rank.mode == 0 && rank.role > 0 && rank.role <= 5)).sumBy("countWin");
    let countLaoChaofengWin = _(myRank.filter(rank => rank.mode == 0 && rank.role > 5 && rank.role <= 8)).sumBy("countWin");

    return res.json({
        error: false,
        message: "OK",
        data: {
            countTotal, countWin, count6Total, count7Total, count8Total, count6Win, count7Win, count8Win, countXuyuanTotal, countLaoChaofengTotal, countXuYuanWin, countLaoChaofengWin
        }
    });
};

export let load = (recordId: string) => {
    return RecordModel.findOne({ recordId: recordId });
}

export let create = async (req, res, next) => {

    let existingRecord = await RecordModel.findOne({ roomName: req.body.roomName, userId: req.user.userId });
    if (existingRecord) {
        return;
    }

    const records = req.body.map(m => new RecordModel(m));
    RecordModel.insertMany(records)
        .catch(error => {
            console.error(error);
        });

    return list(req, res, next);
}

export let remove = (params: any) => {
    return load(params).then((record) => record.remove());
}

export default { list, create };
