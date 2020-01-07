import alterDOM from "./alterDOM"

export default function setupButtonEventListener() {
    document.getElementById('button').addEventListener('click', function () {
        alterDOM();
    });
}