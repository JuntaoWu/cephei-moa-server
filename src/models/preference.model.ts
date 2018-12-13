
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';

/**
 * Preference Schema
 */
export class Preference extends Typegoose {
    @prop()
    platform: String;
    @prop()
    showClub?: Boolean;
    @prop()
    showMore?: Boolean;
}

const PreferenceModel = new Preference().getModelForClass(Preference, {
    schemaOptions: {
        timestamps: true,
    },
});

export default PreferenceModel;
