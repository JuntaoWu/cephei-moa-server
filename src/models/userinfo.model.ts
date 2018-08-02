/**
 *  openId: String,
    avatarUrl: String,
    city: String,
    country: String,
    gender: Number,
    language: String,
    nickName: String,
    province: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
 */
import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

import { required } from 'joi';

/**
 * UserInfo Schema
 */
export class UserInfo extends Typegoose {
    @prop()
    openId: String;
    @prop()
    avatarUrl: String;
    @prop()
    city: String;
    @prop()
    country: String;
    @prop()
    gender: Number;
    @prop()
    language: String;
    @prop()
    nickName: String;
    @prop()
    province: String;
    @prop()
    createdAt: Date;
}

const UserInfoModel = new UserInfo().getModelForClass(UserInfo);

export default UserInfoModel;