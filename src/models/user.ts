import {Schema, model} from "mongoose";

export let UserSchema: Schema = new Schema({

    mail: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    pseudo : {
        type: String,
        required: true
    },
    info: String,
    address : String,
    password: {
        type: String,
        required: true
    }

});

export default model('User',UserSchema);