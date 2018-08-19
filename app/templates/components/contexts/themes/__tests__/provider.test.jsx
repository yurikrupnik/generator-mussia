import React from 'react';
import Provider from '../provider';
import { themes } from '../context';

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('theme provider', () => {
    it('should render <Provider />', () => {
        const wrapper = shallow(
            <Provider>
                <div>
                    asd
                </div>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should toggle themes', () => {
        const wrapper = shallow(
            <Provider>
                <div>
                    asd
                </div>
            </Provider>
        );
        const instance = wrapper.instance();
        instance.toggleTheme();
        expect(instance.state.theme).toBe(themes.dark);
        instance.toggleTheme();
        expect(instance.state.theme).toBe(themes.light);
    });
});
