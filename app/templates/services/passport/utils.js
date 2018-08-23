import passport from 'passport';
import faker from 'faker';
import shortid from 'shortid';
import { validatePassword, generateHash } from './crypt';
import User from '../../api/users/model';

const serialize = (user, done) => done(null, user.id);

const deserialize = (id, done) => User.findOne({ id }, done);

const checkValidUser = (user, done) => (valid) => {
    if (!valid) {
        return done(null, false, { message: 'invalid user', user }); // todo check it
    }
    return done(null, user);
};

const handleHash = user => (hash) => {
    user.hashPassword = hash; // eslint-disable-line no-param-reassign
    return user;
};

const saveUser = done => user => user.save(done);

const checkUserByEmailAndPass = (email, password, done) => (user) => {
    if (!user) {
        return generateHash(password)
            .then(handleHash(new User({
                email, name: faker.name.findName(), id: shortid.generate()
                // todo remove id and use mongo _id
            })))
            .then(saveUser(done))
            .catch((err) => {
                console.log('error saving user', err); // eslint-disable-line no-console
            });
    }
    return validatePassword(password, user.hashPassword)
        .then(checkValidUser(user, done));
};

const localStrategyHandler = (req, email, password, done) => User.findOne({ email })
    .then(checkUserByEmailAndPass(email, password, done))
    .catch(done);

const socialAppsRegisterCallback = (profile, done) => () => User.findOne({ id: profile.id })
    .then((user) => {
        if (user) {
            done(null, user);
        } else {
            const { provider } = profile;
            const newUser = new User({
                id: profile.id,
                email: profile.email || '',
                name: provider === 'facebook' ? profile.displayName : profile.fullName,
            });
            newUser.save(done);
        }
    })
    .catch(done);

const socialNetworkStrategy = (token, refreshTocken, profile, done) => process
    .nextTick(socialAppsRegisterCallback(profile, done));

const setSocialAuth = provider => passport.authenticate(provider, {
    successRedirect: '/',
    failureRedirect: '/',
    scope: ['email']
}); // handling fail with router

const createSocialNetworkRoutes = (app) => {
    const socialNetworks = ['facebook'];
    socialNetworks.forEach((provider) => { // register middlewares
        app.get(`/auth/${provider}`, setSocialAuth(provider));
        app.get(`/auth/${provider}/callback`, setSocialAuth(provider));
    });
};

export {
    serialize,
    deserialize,
    socialNetworkStrategy,
    localStrategyHandler,
    createSocialNetworkRoutes
};
