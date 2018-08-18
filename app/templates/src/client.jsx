import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import './styles/_index.scss';

const renderMethod = module.hot ? render : hydrate;

renderMethod(
    <BrowserRouter>
        <App routes={routes} />
    </BrowserRouter>, global.document.getElementById('root')
);
