import getMessage from './message';

test('gives correct name', () => {
    expect(getMessage('person')).toBe('Hello person');
});