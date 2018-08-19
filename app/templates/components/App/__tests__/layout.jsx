import React from 'react';
import Layout from '../layout';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    test,
    expect,
    shallow
} = global;

test('renders <Layout /> component', () => {
    const wrapper = shallow(<Layout routes={routes} />);
    // expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});
