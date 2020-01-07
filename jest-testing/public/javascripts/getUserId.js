import makeNetworkRequest from './makeNetworkRequest';

export default function getUserId() {
    return new Promise(resolve => {
        makeNetworkRequest()
            .then(response => {
                    var userId = response.id;
                    resolve(userId);
                }
            );
    });
}