import Loadable from './Loadable';

const Topics = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ './Topics'),
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './About'),
});

<%_ if(filters.auth) { _%>
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../api/auth/container'),
});
<%_ } _%>
<%_ if(filters.db) { _%>
const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard'),
});

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});

const Users = Loadable({
    loader: () => import(/* webpackChunkName: "users" */ './Users'),
});

<%_ } _%>
<%_ if(filters.io) { _%>
const Register = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ './Register'),
});

const ChatRoom = Loadable({
    loader: () => import(/* webpackChunkName: "chat" */ './ChatRoom'),
});
<%_ } _%>
const routes = [
<%_ if(filters.db) { _%>
    {
        path: '/',
        component: Dashboard,
        exact: true,
        key: 'dashboard'
    },
<%_ } _%>
    {
        path: '/topics',
        component: Topics,
        key: 'topics'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
<%_ if(filters.io) { _%>
    {
        path: '/register',
        component: Register,
        key: 'register'
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'chat'
    },
<%_ } _%>
<%_ if(filters.auth) { _%>
    {
        path: '/login',
        component: Login,
        key: 'login'
    },
<%_ } _%>
<%_ if(filters.db) { _%>
    {
        path: '/projects',
        component: Projects,
        key: 'projects'
    },
    {
        path: '/users',
        component: Users,
        key: 'users'
    }
    <%_ } _%>
];

export default routes;
