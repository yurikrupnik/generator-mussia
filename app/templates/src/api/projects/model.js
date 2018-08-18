import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    // description: {
    //     type: String,
    //     required: false,
    //     default: ''
    // },
    // context: {
    //     type: Object,
    //     required: true,
    //     default: { settings: {}, profile: [], general: [] }
    // },
    // settings: {
    //     type: Object,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now,
        required: false
    }
});

const Model = mongoose.model(dbModel, schema);
// new Model({
// // //     email: 'd@d.com',
//     name: 'project1',
// // //     hashPassword: 'sd'
// }).save();

export default Model;
export { schema };
