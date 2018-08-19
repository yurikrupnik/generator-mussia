import LocalStrategy from 'passport-local';
import { localStrategyHandler } from './utils';

const params = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

export default new LocalStrategy(params, localStrategyHandler);
