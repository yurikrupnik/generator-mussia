import React from 'react';
import App from '../app';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    it,
    expect,
    shallow
} = global;

it('renders <App /> component', () => {
    const wrapper = shallow(<App routes={routes} />);
    expect(wrapper).toMatchSnapshot();
});
