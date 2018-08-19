import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

const Loading = (props) => {
    const {
        error,
        retry,
        timedOut,
        pastDelay
    } = props;
    let elm = null;
    if (error) {
        elm = (
            <div>
                <div>
                    Error!
                </div>
                <button type="button" onClick={retry}>
                    Retry
                </button>
            </div>
        );
    } else if (timedOut) {
        elm = (
            <div>
                <div>
                    Taking a long time...
                </div>
                <button type="button" onClick={retry}>
                    Retry
                </button>
            </div>
        );
    } else if (pastDelay) {
        elm = (
            <div>
                Loading...
            </div>
        );
    }
    return elm;
};

Loading.defaultProps = {
    error: '',
    pastDelay: '',
    timedOut: '',
    retry: () => {}
};

Loading.propTypes = {
    error: PropTypes.shape({}),
    pastDelay: PropTypes.bool,
    timedOut: PropTypes.bool,
    retry: PropTypes.func
};

export default function (opts) {
    return Loadable(Object.assign({
        loading: Loading,
        // delay: 200,
        // timeout: 10,
    }, opts));
}
