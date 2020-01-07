export default function makeNetworkRequest() {
    return new Promise(resolve => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                resolve(response.data);
            }
        );
    });
}