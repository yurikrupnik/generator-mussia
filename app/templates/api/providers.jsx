<%_ if(filters.db) { _%>
import users from './users/provider';
import projects from './projects/provider';
<%_ } _%>

export default [
<%_ if(filters.db) { _%>
    users,
    projects
<%_ } _%>
];
