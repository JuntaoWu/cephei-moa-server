
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';

import { required } from 'joi';
import RankModel from './rank.model';

/**
 * Record Schema
 */
@pre<Record>('save', async function (next) { // or @pre(this: Record, 'save', ...

    if (!this.isNew) {
        return next();
    }

    let result;

    // mode: 0, role: 0
    result = await RankModel.findOneAndUpdate(
        { mode: 0, role: 0, userId: this.userId },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (!result) {
        return next(new Error(`update rank error, mode: 0, role: 0`));
    }

    // mode: ${this.gameType}, role: 0
    result = await RankModel.findOneAndUpdate(
        { mode: this.gameType, role: 0, userId: this.userId },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    ).catch((error) => {
        console.error(error);
    });

    if (!result) {
        return next(new Error(`update rank error, mode: ${this.gameType}, role: 0`));
    }

    // mode: 0, role: ${this.roleId}
    result = await RankModel.findOneAndUpdate(
        { mode: 0, role: this.roleId, userId: this.userId },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    ).catch((error) => {
        console.error(error);
    });

    if (!result) {
        return next(new Error(`update rank error, mode: 0, role: ${this.roleId}`));
    }

    // mode: ${this.gameType}, role: ${this.roleId}
    result = await RankModel.findOneAndUpdate(
        { mode: this.gameType, role: this.roleId, userId: this.userId },
        { $inc: { countTotal: 1, countWin: this.isWin ? 1 : 0 } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    ).catch((error) => {
        console.error(error);
    });

    if (!result) {
        return next(new Error(`update rank error, mode: ${this.gameType}, role: ${this.roleId}`));
    }

    return next();
})
export class Record extends Typegoose {
    @prop()
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