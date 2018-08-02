import Promise from 'bluebird';
import mongoose, { mongo, Mongoose, MongooseDocument } from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { required } from 'joi';

/**
 * Player Schema
 */
export class Player extends Typegoose {
    @prop()
    openId: String;
    @prop()
    level?: Number;
    @prop()
    money?: Number;
    @prop()
    initMoney?: Number;
    @prop()
    initMoneyAdditionShu?: Number;
    @prop()
    initMoneyAdditionWu?: Number;
    @prop()
    initMoneyAdditionWei?: Number;
    @prop()
    initMoneyAdditionNeutral?: Number;
    @prop()
    experience?: Number;
    @prop()
    battleMoneyAddition?: Number;
    @prop()
    fireMoneyAddition?: Number;
    @prop()
    initLoyalReduce?: Number;
    @prop()
    isLocked?: Boolean;
    @prop()
    canAdjustHeroes?: Boolean;
    @prop()
    prison?: Array<any>;
    @prop()
    passInfo?: Array<any>;
    @prop()
    achievInfo?: Array<any>;
    @prop()
    gamesTime?: Number;
    @prop()
    gamesNum?: Number;
    @prop()
    gamesGetMoney?: Number;
    @prop()
    gamesUseMoney?: Number;
    @prop()
    collectHeroes?: Array<any>;
    @prop()
    buysGoods?: Array<any>;
    @prop()
    heroesScore?: Number;
    @prop()
    achievScore?: Number;
    @prop()
    point?: Number;
    @prop()
    currentAggregatePoints?: Number;
    @prop()
    speed?: Number;
    @prop()
    teamLimit?: Number;
    @prop()
    canChooseCampList?: Array<any>;
    @prop()
    startTime?: Date;
    @prop()
    passNoviceGuidance?: Boolean;
    @prop()
    tigerShaped?: Number;
    @prop()
    tickets?: any;
    @prop()
    additionalAdjustHeroes?: Boolean;
    @prop()
    initHeroesSima?: Array<Number>;
    @prop()
    experiencePool?: Number;
    @prop()
    achievements?: Array<any>;
}

const PlayerModel = new Player().getModelForClass(Player);

export default PlayerModel;
