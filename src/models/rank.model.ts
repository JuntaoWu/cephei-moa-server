import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { required } from 'joi';

/**
 * Rank Schema
 */
export class Rank extends Typegoose {
    @prop()
    openId: String;
    @prop()
    nickName?: String;
    @prop()
    avatarUrl?: String;
    @prop()
    collectScore?: Number;
    @prop()
    points?: Number;
    @prop()
    speed?: Number;
}

const RankModel = new Rank().getModelForClass(Rank);

export default RankModel;
