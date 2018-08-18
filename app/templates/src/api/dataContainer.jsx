import { Component } from 'react';
import PropTypes from 'prop-types';

class DataContainer extends Component {
    componentDidMount() {
        const { fetch, data } = this.props;
        if (!data.length && typeof fetch === 'function') {
            fetch({});
        }
    }

    render() {
        const { render } = this.props;
        return render(Object.assign({}, this.props, { render: null }));
    }
}

DataContainer.propTypes = {
    render: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default DataContainer;
