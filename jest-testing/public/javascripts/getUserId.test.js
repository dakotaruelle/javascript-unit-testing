jest.mock('./makeNetworkRequest');

import getUserId from './getUserId';

test('gets async data', () => {
    return getUserId().then(id => {
        expect(id).toEqual(1);
    });
});