import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../api/auth/api';

const MainNav = ({ routes }) => (
    <header>
        <button type="button" onClick={api.logout}>
            logout
        </button>
        {routes.map(route => (
            <div key={route.key}>
                <Link to={route.path}>
                    {route.key}
                </Link>
            </div>
        ))}
    </header>
);

MainNav.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
};

export default MainNav;
