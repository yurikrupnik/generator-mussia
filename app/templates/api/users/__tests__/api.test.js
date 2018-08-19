import moxios from 'moxios';
import instance from '../../request';
import api from '../api';

const {
    describe, test, beforeEach, afterEach
} = global;

describe('users api', () => {
    beforeEach(() => {
        moxios.install(instance);
    });

    afterEach(() => {
        moxios.uninstall(instance);
    });

    test('should fetch users', (done) => {
        moxios.withMock(() => {
            api.fetch({});
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    data: {
                        id: 12345, firstName: 'Fred', lastName: 'Flintstone'
                    }
                });
                done();
            });
        });
    });

    test('should handle error users', (done) => {
        moxios.withMock(() => {
            api.fetch({});
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 500,
                    data: new Error('as')
                });
                done();
            });
        });
    });
});
