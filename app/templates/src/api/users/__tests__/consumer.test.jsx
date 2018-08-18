import React from 'react';
import Consumer from '../consumer';

const {
    describe,
    test,
    expect,
    render
} = global;

describe('theme consumer', () => {
    test('render consumer with render props', () => {
        const wrapper = render( // notice render here
            <Consumer render={(props) => {
                const { fetch } = props;
                fetch();
                return (
                    <div>
                        asd
                    </div>
                );
            }}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
