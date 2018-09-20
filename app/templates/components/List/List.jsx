import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/index';

const List = (props) => {
    const { data, loading } = props;
    return (
        <div>
            {/* eslint-disable-next-line no-underscore-dangle */}
            {loading ? <Spinner /> : Array.isArray(data) && data.map(v => (
                /* eslint-disable-next-line no-underscore-dangle */
                <div key={v._id}>
                    <div>
                        <span>
                            name:
                        </span>
                        {v.name}
                    </div>
                </div>
            ))}
        </div>
    );
};


List.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default List;
