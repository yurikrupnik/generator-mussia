import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
<%_ if(filters.auth) { _%>
import api from '../../api/auth/api';
<%_ } _%>

const MainNav = ({ routes }) => (
    <header>
<%_ if(filters.auth) { _%>
        <button type="button" onClick={api.logout}>
            logout
        </button>
<%_ } _%>
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
