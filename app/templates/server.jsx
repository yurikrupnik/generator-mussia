import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { port<%= filters.db ? ', databaseUrl ' : ''%>} from './config';
import render from './services/render';
import api from './api';
<% if (filters.db) { _%>
import db from './services/db';
<%_ } _%>
<%_ if (filters.io) { _%>
import server from './services/socket/server';
<%_ } _%>
<%_ if (filters.auth) { _%>
import passport from './services/passport';
<%_ } _%>
<%_ if (filters.render) { _%>
import App from './components/App';
import routes from './components/routes';
<%_ } _%>

const app = express();

const assets = path.resolve(__dirname, 'assets');

app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

<%_ if (filters.db) { _%>
app.use(db(databaseUrl));
<%_ } _%>
<%_ if (filters.auth) { _%>
app.use(passport(app));
<%_ } _%>
app.use(api);
app.use((req, res, next) => {
    console.log('req.url', req.url); // eslint-disable-line no-console
    console.log('req.session', req.session.id); // eslint-disable-line no-console
    console.log('req.user', req.user); // eslint-disable-line no-console
    if (req.isAuthenticated()) {
        console.log('Authenticated'); // eslint-disable-line no-console
    } else {
        console.log('Authenticated not'); // eslint-disable-line no-console
    }
    return next();
});
app.use(render(<%= filters.render ? "App, routes": "" %>));

<%= filters.io ? 'server(app)' : 'app' %>.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
