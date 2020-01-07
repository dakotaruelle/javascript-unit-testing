import setupButtonEventListener from './setupButtonEventListener';

test('displays a message after a click', () => {
    document.body.innerHTML =
        '<button id="button" />' +
        '<div id="message" />';

    setupButtonEventListener();

    document.getElementById('button').click();
    
    const messageNode = document.getElementById('message');
    expect(messageNode.textContent).toEqual("I've been put here by JS!");
});