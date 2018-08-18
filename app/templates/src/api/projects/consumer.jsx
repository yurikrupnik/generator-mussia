import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DataContainer from '../dataContainer';

const ProjectsConsumer = ({ render }) => (
    <Consumer>
        {props => <DataContainer {...props} render={render} />}
    </Consumer>
);

ProjectsConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default ProjectsConsumer;
