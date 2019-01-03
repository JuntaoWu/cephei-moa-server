
import { prop, Typegoose, ModelType, InstanceType, pre } from 'typegoose';

/**
 * AdminUser Schema
 */
export class AdminUser extends Typegoose {
    @prop()
    email: String;
    @prop()
    passwordHash?: String;
    @prop()
    nickName?: String;
    @prop()
    avatarUrl?: String;
}

const AdminUserModel = new AdminUser().getModelForClass(AdminUser, {
    schemaOptions: {
        timestamps: true,
    },
});

export default AdminUserModel;
