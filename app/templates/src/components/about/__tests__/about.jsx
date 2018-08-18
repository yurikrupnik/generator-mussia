import React from 'react';
import About from '../index';

const {
    it,
    expect,
    shallow
} = global;

it('renders three <About /> components', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
});
