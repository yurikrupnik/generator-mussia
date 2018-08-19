import React from 'react';
import DefaultButton from '../defaultButton';

const {
    it,
    expect,
    shallow
} = global;

it('renders <DefaultButton /> component', () => {
    const wrapper = shallow(
        <DefaultButton
            theme={{ foreground: '#000000', background: '#eeeeee', color: 'red' }}
            toggleTheme={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
