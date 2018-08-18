import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

const render = (app, routes) => (req, res) => {
    const context = {};
    const { url } = context;
    const title = 'my title';
    const html = renderToString(
        <StaticRouter context={context}>
            <app.name routes={routes} />
        </StaticRouter>
    );
    const state = { title, html };
    return url ? res.redirect(301, url) : res.render('index', state);
};

export default render;
