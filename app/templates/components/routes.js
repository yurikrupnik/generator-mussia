<%_ if (filters.loadable) { _%>
import Loadable from './Loadable';

const Topics = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ './Topics'),
});

const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../api/auth/container'),
});

const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard'),
});

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});

const Users = Loadable({
    loader: () => import(/* webpackChunkName: "users" */ './Users'),
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './about'),
});

const Register = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ './Register'),
});

const ChatRoom = Loadable({
    loader: () => import(/* webpackChunkName: "chat" */ './ChatRoom'),
});
<%_ } _%>
<%_ if (!filters.loadable) { _%>
import Topics from './Topics';
import Login from '../api/auth/container';
import Dashboard from './Dashboard';
import Projects from './Projects';
import About from './about';
import Users from './Users';
import Register from './Register';
import ChatRoom from './ChatRoom';
<%_ } _%>

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
        key: 'dashboard'
    },
    {
        path: '/register',
        component: Register,
        key: 'register'
    },
    {
        path: '/login',
        component: Login,
        key: 'login'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
    {
        path: '/topics',
        component: Topics,
        key: 'topics'
    },
    {
        path: '/projects',
        component: Projects,
        key: 'projects'
    },
    {
        path: '/users',
        component: Users,
        key: 'users'
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'chat'
    }
];

export default routes;
