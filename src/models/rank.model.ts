
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';
import { required } from 'joi';

/**
 * Rank Schema
 */
export class Rank extends Typegoose {
    @prop({ index: true })
    userId: Number;
    @prop()
    mode?: Number;
    @prop()
    role?: Number;
    @prop()
    countWin?: Number;
    @prop()
    countTotal?: Number;
    @prop()
    winRate?: Number;
}

const RankModel = new Rank().getModelForClass(Rank);

export default RankModel;
