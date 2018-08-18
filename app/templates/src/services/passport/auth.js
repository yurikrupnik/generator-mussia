import { serialize, deserialize } from './utils';
import localStrategy from './local';
import facebookStrategy from './facebook';

export default (passport) => {
    passport.serializeUser(serialize);
    passport.deserializeUser(deserialize);
    passport.use(localStrategy);
    passport.use(facebookStrategy);
};
