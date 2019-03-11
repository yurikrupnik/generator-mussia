import React from 'react';
import { render<%= filters.render ? ', hydrate ' : ' ' %>} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import config from './config';
import './styles/_index.scss';

<%_ if (filters.render) { _%>
const renderMethod = config.isProd ? hydrate : render

<%_ } _%>
<%=  filters.render ? 'renderMethod' : 'render'%>(
    <BrowserRouter>
        <App routes={routes} />
    </BrowserRouter>, global.document.getElementById('root')
);
