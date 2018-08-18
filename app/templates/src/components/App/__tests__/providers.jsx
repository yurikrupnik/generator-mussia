import React from 'react';
import Providers from '../providers';
import providers from '../../../api/providers';

// jest.mock('../../../api/providers');

const {
    describe,
    it,
    expect,
    shallow,
} = global;

describe('providers', () => {
    it('renders three <Providers /> components', () => {
        const wrapper = shallow(
            <Providers providers={providers}>
                <div>
                    asd
                </div>
            </Providers>
        );
        expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
