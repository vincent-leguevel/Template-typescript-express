import Local from 'passport-local';
import UserModel from '../models/user';

let localStrategy = new Local.Strategy(async (mail, password, done) => {

    try{
        let user = await UserModel.findOne({mail: mail});

        if(!user) {
            return done(null,false,{message: 'Incorrect username'})
        }
        return done(null,user);

    }catch (err) {
        done(err);
    }
});

export default localStrategy;