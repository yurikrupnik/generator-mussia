import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { port, databaseUrl } from './config';
import api from './api';
import render from './services/render';
import db from './services/db';
import server from './services/socket/server';
import passport from './services/passport';
import App from './components/App';
import routes from './components/routes';

const app = express();

const assets = path.resolve(__dirname, 'assets');

app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

app.use(db(databaseUrl));
app.use(passport(app));
app.use(api);
app.use((req, res, next) => {
    console.log('req.url', req.url);
    console.log('req.session', req.session.id);
    console.log('req.user', req.user);
    if (req.isAuthenticated()) {
        console.log('Authenticated');
    } else {
        console.log('Authenticated not');
    }
    return next();
});
app.use(render(App, routes));

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
