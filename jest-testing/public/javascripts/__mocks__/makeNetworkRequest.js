const data = {
    completed: false,
    id: 1
};

export default function getData() {
    return new Promise((resolve) => {
        process.nextTick(() =>
            resolve(data)
        );
    });
}