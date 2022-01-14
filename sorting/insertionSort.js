
let arr = [5, 3, 23, 10, 1, 9, 8];
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j;
        console.log(arr[i])
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current;
    }

    return arr;
}
console.log(insertionSort(arr))