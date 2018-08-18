import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DefaultConsumer from './defaultButton';

function ThemesConsumer({ render }) {
    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                }
                return (
                    <DefaultConsumer {...props} />
                );
            }}
        </Consumer>
    );
}

ThemesConsumer.defaultProps = {
    render: null
};

ThemesConsumer.propTypes = {
    render: PropTypes.func
};

export default ThemesConsumer;
