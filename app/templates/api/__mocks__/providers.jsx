import React from 'react';
import PropTypes from 'prop-types';

const A = ({ children }) => (
    <div>
        {children}
    </div>
);

A.propTypes = {
    children: PropTypes.element.isRequired
};

const B = ({ children }) => (
    <div>
        {children}
    </div>
);

B.propTypes = {
    children: PropTypes.element.isRequired
};

export default [
    A,
    B
];
