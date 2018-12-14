
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';
import { required } from 'joi';

/**
 * Notice Schema
 */
export class Notice extends Typegoose {
    @prop()
    title?: String;
    @prop()
    content?: String;
}

const NoticeModel = new Notice().getModelForClass(Notice, {
    schemaOptions: {
        timestamps: true,
    },
});

export default NoticeModel;
