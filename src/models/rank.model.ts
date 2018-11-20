
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';
import { required } from 'joi';

/**
 * Rank Schema
 */
@pre<Rank>('findOneAndUpdate', async function (next) { // or @pre(this: Rank, 'save', ...
    this.winRate = +this.countWin / +this.countTotal;
    console.log("pre findOneAndUpdate Rank", this.winRate, this.countWin, this.countTotal);
    next();
})
export class Rank extends Typegoose {
    @prop()
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
