import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

import { required } from 'joi';

/**
 * LevelInfo Schema
 */
export class LevelInfo extends Typegoose {
    @prop()
    openId: String;
    @prop()
    currentChapter?: Number;
    @prop()
    currentLevel?: Object;
    @prop()
    currentBattle?: Object;
    @prop()
    currentPath?: Array<Number>;
    @prop()
    currentHeroes?: Array<Number>;
    @prop()
    currentCamp?: Number;
}

const LevelInfoModel = new LevelInfo().getModelForClass(LevelInfo);

export default LevelInfoModel;
