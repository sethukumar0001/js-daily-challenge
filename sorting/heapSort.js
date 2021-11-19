// https://miro.medium.com/max/350/1*LVcbTeL6zPLfDHiQ2w3Jtw.gif
// https://levelup.gitconnected.com/heapsort-for-javascript-newbies-598d25477d55

const arr = [6, 5, 3, 1, 8, 7, 2, 4]
function HeapSort(arr) {
    length = arr.length;
    i = Math.floor(length / 2 - 1);
    k = length - 1

    while (i >= 0) {
        Heapify(arr, length, i);
        i--;
    }
    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        Heapify(arr, k, 0);
        k--;
    }
    return arr;
}


function Heapify(arr, length, i) {
    // console.log(arr,"----->arr")
    // console.log(length,"=====>length")
    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        return Heapify(arr, length, largest);
    }
    return arr;

}

console.log(HeapSort(arr));