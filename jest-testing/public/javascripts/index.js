import getMessage from './message';
import getUserId from './getUserId';

const message = getMessage('person');
console.log(message);

getUserId().then(id => {
    console.log('user id: ', id);
});