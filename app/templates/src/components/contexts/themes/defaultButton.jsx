import React from 'react';
import PropTypes from 'prop-types';

const DefaultConsumer = (props) => {
    const { theme, toggleTheme } = props;
    return (
        <div>
            <button type="button" style={{ background: theme.background }} onClick={toggleTheme}>
                Toggle
            </button>
        </div>
    );
};

DefaultConsumer.propTypes = {
    theme: PropTypes.shape({}).isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default DefaultConsumer;
