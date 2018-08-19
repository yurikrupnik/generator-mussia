import express from 'express';
import users from './users/index';
import projects from './projects/index';
import auth from './auth/index';

const route = express.Router();

// route.use('auth', auth);
route.use('/api', [
    users,
    projects,
    auth
]);

export default route;
