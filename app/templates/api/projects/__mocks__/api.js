export default {
    fetch: jest.fn() // eslint-disable-line no-undef
        .mockResolvedValueOnce([{
            _id: '2', name: 'ds'
        }])
        .mockRejectedValueOnce(new Error('Async error'))
};
