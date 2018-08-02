import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { required } from 'joi';

/**
 * NodesInfo Schema
 */
export class NodesInfo extends Typegoose {
    @prop()
    openId: String;
    @prop()
    events?: Array<Number>;
}

const NodesInfoModel = new NodesInfo().getModelForClass(NodesInfo);

export default NodesInfoModel;
