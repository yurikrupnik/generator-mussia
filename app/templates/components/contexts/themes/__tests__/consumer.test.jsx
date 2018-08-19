import React from 'react';
import Consumer from '../consumer';
import DefaultConsumer from '../defaultButton';

const {
    describe,
    test,
    expect,
    render
} = global;

describe('theme consumer', () => {
    test('render consumer', () => {
        const wrapper = render(<Consumer />); // render prop component
        expect(wrapper).toMatchSnapshot();
    });

    test('render consumer with render props', () => {
        const wrapper = render( // render prop component
            <Consumer render={(props) => {
                const { toggleTheme } = props;
                toggleTheme();
                return (<DefaultConsumer {...props} />);
            }}
            />
        );
        expect(wrapper.length).toBe(1);
    });
});
