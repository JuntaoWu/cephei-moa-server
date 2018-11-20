
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';

import { required } from 'joi';
import RankModel from './rank.model';

/**
 * Record Schema
 */
//todo: Note: we should not use async function here. Instead, use callback-style calls.
@pre<Record>('save', function (next) { // or @pre(this: Record, 'save', ...

    if (!this.isNew) {
        return next();
    }

    let result;

    // mode: 0, role: 0
    RankModel.findOneAndUpdate(
        { $and: [{ mode: 0 }, { role: 0 }, { userId: this.userId }] },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: 0, role: 0 } },
        { upsert: true, new: true },
        (error, doc) => {
            if (error) {
                return next(error);
            }
            doc.winRate = +doc.countWin / +doc.countTotal;
            doc.save();
        }
    );

    // if (!result) {
    //     return next(new Error(`update rank error, mode: 0, role: 0`));
    // }

    // mode: ${this.gameType}, role: 0
    RankModel.findOneAndUpdate(
        { $and: [{ mode: this.gameType }, { role: 0 }, { userId: this.userId }] },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: this.gameType, role: 0 } },
        { upsert: true, new: true },
        (error, doc) => {
            if (error) {
                return next(error);
            }
            doc.winRate = +doc.countWin / +doc.countTotal;
            doc.save();
        }
    );

    // if (!result) {
    //     return next(new Error(`update rank error, mode: ${this.gameType}, role: 0`));
    // }

    // mode: 0, role: ${this.roleId}
    RankModel.findOneAndUpdate(
        { $and: [{ mode: 0 }, { role: this.roleId }, { userId: this.userId }] },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: 0, role: this.roleId } },
        { upsert: true, new: true },
        (error, doc) => {
            if (error) {
                return next(error);
            }
            doc.winRate = +doc.countWin / +doc.countTotal;
            doc.save();
        }
    );

    // if (!result) {
    //     return next(new Error(`update rank error, mode: 0, role: ${this.roleId}`));
    // }

    // mode: ${this.gameType}, role: ${this.roleId}
    RankModel.findOneAndUpdate(
        { $and: [{ mode: this.gameType }, { role: this.roleId }, { userId: this.userId }] },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 }, $setOnInsert: { mode: this.gameType, role: this.roleId } },
        { upsert: true, new: true },
        (error, doc) => {
            if (error) {
                return next(error);
            }
            doc.winRate = +doc.countWin / +doc.countTotal;
            doc.save();
        }
    );

    // if (!result) {
    //     return next(new Error(`update rank error, mode: ${this.gameType}, role: ${this.roleId}`));
    // }

    return next();
})
export class Record extends Typegoose {
    @prop({ index: true })
    userId: Number;
    @prop()
    roomName: String;
    @prop()
    roleId: String;
    @prop()
    camp: Number;
    @prop()
    gameType: Number;
    @prop()
    isWin: Boolean;
}

const RecordModel = new Record().getModelForClass(Record);

export default RecordModel;