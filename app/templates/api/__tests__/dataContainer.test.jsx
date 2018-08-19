import React from 'react';
import DataContainer from '../dataContainer';

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('DataContainer Component', () => {
    const Component = () => (
        <div>
            sad
        </div>
    );
    test('render DataContainer without data', () => {
        const wrapper = shallow(
            <DataContainer
                fetch={() => {}}
                data={[]}
                render={() => <Component />}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('render consumer with data', () => {
        const wrapper = shallow(
            <DataContainer
                data={[{}]}
                fetch={() => {}}
                render={() => <Component />}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
