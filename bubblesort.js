

let arr = [5, 3, 23, 10, 15, 9, 8];

const bubbleSort = (arr) => {
    let length = arr.length;
    let temp = ''
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j + 1] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))