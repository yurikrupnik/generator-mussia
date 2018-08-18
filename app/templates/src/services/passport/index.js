import passport from 'passport';
import auth from './auth';
import { createSocialNetworkRoutes } from './utils';

export default (app) => {
    auth(passport);
    createSocialNetworkRoutes(app);
    return [passport.initialize(), passport.session()];
};
