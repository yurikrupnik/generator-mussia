import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React, { isValidElement } from 'react';

const render = (App, routes) => (req, res) => {
    const context = {};
    const { url } = context;
    const title = 'my title';
    // delete if not preparation for ssr not needed - fast reload
    const html = isValidElement(App) ? renderToString(
        <StaticRouter context={context}>
            <App routes={routes} />
        </StaticRouter>
    ) : '';
    const state = { title, html };
    return url ? res.redirect(301, url) : res.render('index', state);
};

export default render;
