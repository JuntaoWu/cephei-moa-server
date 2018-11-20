
import { prop, Typegoose, ModelType, InstanceType, pre } from "typegoose";
import mongoose, { Schema } from "mongoose";

class CounterSchema extends Typegoose {
    @prop({ required: true })
    public seqName: String;

    @prop({ default: 200000, unique: true })
    public seq: Number;

    @prop({ default: "Hello" })
    public test: String;
}

const CounterModel = new CounterSchema().getModelForClass(CounterSchema);

/**
 * WxUser Schema
 */
@pre<WxUser>('save', function (next) { // or @pre(this: WxUser, 'save', ...
    CounterModel.findOneAndUpdate(
        { seqName: "WxUser" },
        { $inc: { seq: 1 } },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        (error, counter) => {
            if (error) {
                return next(error);
            }
            this.userId = counter.seq;
            next();
        });
})
export class WxUser extends Typegoose {
    @prop()
    userId: Number;
    @prop()
    wxgameOpenId: String;
    @prop()
    nativeOpenId: String;
    @prop()
    unionId: String;
    @prop()
    session_key: String;
    @prop()
    avatarUrl?: String;
    @prop()
    city?: String;
    @prop()
    country?: String;
    @prop()
    gender?: Number;
    @prop()
    language?: String;
    @prop()
    nickName?: String;
    @prop()
    province?: String;
    @prop()
    registeredAt?: Date;
    @prop()
    migrated?: Boolean;
}

const WxUserModel = new WxUser().getModelForClass(WxUser, {
    schemaOptions: {
        timestamps: true,
    }
});

export default WxUserModel;