import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DataContainer from '../dataContainer';

const UsersConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

UsersConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default UsersConsumer;
