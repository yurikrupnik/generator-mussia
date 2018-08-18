import React from 'react';
import Provider from '../provider';
import api from '../api';

jest.mock('../api'); // eslint-disable-line no-undef

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('users provider', () => {
    const Component = () => (
        <div>
            helo
        </div>
    );

    test('renders Projects Provider', () => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });

    test('should test fetch', (done) => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        const instance = wrapper.instance();
        instance.fetch();
        expect(api.fetch).toHaveBeenCalledTimes(1);
        done();
    });

    test('should test catch', (done) => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        const instance = wrapper.instance();
        instance.fetch();
        expect(api.fetch).toHaveBeenCalledTimes(2);
        done();
    });
});
