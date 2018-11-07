
import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

import { required } from 'joi';

/**
 * Record Schema
 */
export class Record extends Typegoose {
    @prop()
    openId: String;
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