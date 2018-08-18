import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

const UserSchema = new Schema({
    // id: {
    //     type: String,
    //     index: true
    // },
    // name: String,
    // hashPassword: String,
    id: {
        type: String,
        index: true
    },
    email: { type: String, required: true },
    // email: {type: String},
    name: String,
    hashPassword: String,
});

const Model = mongoose.model(dbModel, UserSchema);
// new Model({
//     email: 'd@d.com',
//     name: 'yu',
//     hashPassword: 'sd'
// }).save();

export default Model;
export { UserSchema };
