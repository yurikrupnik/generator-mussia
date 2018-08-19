import React from 'react';
import Router from '../index';

const {
    it,
    expect,
    shallow
} = global;

const Component = () => (
    <div>
        asd
    </div>
);

it('should render Router', () => {
    const routes = [
        {
            path: '/',
            component: Component,
            key: '1'
        }
    ];
    const wrapper = shallow(
        <Router routes={routes}>
            <h2>
                s
            </h2>
        </Router>
    );
    expect(wrapper).toMatchSnapshot();
});
