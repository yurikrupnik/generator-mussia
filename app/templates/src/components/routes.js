import Loadable from './Loadable';

const TopicsLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ './Topics'),
});

const LoginLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../api/auth/container'),
});

const DashboardLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ './Dashboard'),
});

const ProjectsLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});
const UsersLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "users" */ './Users'),
});

const AboutLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './About'),
});

const RegisterLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ './Register'),
});

const ChatLoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "chat" */ './ChatRoom'),
});

const routes = [
    {
        path: '/',
        component: DashboardLoadableComponent,
        exact: true,
        key: 'dashboard'
    },
    {
        path: '/register',
        component: RegisterLoadableComponent,
        key: 'register'
    },
    {
        path: '/login',
        component: LoginLoadableComponent,
        key: 'login'
    },
    {
        path: '/about',
        component: AboutLoadableComponent,
        key: 'about'
    },
    {
        path: '/topics',
        component: TopicsLoadableComponent,
        key: 'topics'
    },
    {
        path: '/projects',
        component: ProjectsLoadableComponent,
        key: 'projects'
    },
    {
        path: '/users',
        component: UsersLoadableComponent,
        key: 'users'
    },
    {
        path: '/chat',
        component: ChatLoadableComponent,
        key: 'chat'
    }
];

export default routes;
