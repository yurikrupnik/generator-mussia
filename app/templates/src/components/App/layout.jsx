import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Router from '../Router';

const Layout = ({ routes }) => (
    <Fragment>
        <Router routes={routes}>
            <Nav routes={routes} />
        </Router>
        <div>
            default footer
        </div>
    </Fragment>
);

Layout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Layout;
