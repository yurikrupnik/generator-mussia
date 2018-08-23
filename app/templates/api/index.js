import express from 'express';
import stam from './stam';
<%_ if(filters.db) { _%>
import users from './users';
import projects from './projects';
<%_ } _%>
<%_ if(filters.auth) { _%>
import auth from './auth';
<%_ } _%>

const route = express.Router();

// route.use('auth', auth);
route.use('/api', [
    stam,
<%_ if(filters.db) { _%>
    users,
    projects,
<%_ } _%>
<%_ if(filters.auth) { _%>
    auth
<%_ } _%>
]);

export default route;
