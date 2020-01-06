var myComponent = require('./myComponent');

test('adds 1 + 2 to equal 3', () => {
    expect(myComponent.getSum(1, 2)).toBe(3);
});