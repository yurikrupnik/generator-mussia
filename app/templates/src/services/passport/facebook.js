import FacebookStrategy from 'passport-facebook';
import { socialNetworkStrategy } from './utils';

const secrets = require('./secrets.json');

export default new FacebookStrategy(secrets.facebook, socialNetworkStrategy);
// facebook will send back the token and profile
