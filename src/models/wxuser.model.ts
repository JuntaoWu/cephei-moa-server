
import { prop, Typegoose, ModelType, InstanceType, pre } from "typegoose";
import mongoose, { Schema } from "mongoose";

class CounterSchema extends Typegoose {
    @prop({ default: 200000 })
    seq: Number;
}

const CounterModel = new CounterSchema().getModelForClass(CounterSchema);

/**
 * WxUser Schema
 */
@pre<WxUser>('save', function (next) { // or @pre(this: WxUser, 'save', ...
    CounterModel.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, (error, counter) => {
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