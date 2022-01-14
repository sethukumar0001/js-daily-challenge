

let arr = [5, 3, 23, 10, 1, 9, 8];

const selecionSort = (arr) => {
    let length = arr.length;
    let temp = ''
    for (let i = 0; i < length - 1; i++) {
        for (let j = i; j < length - 1; j++) {
            if (arr[j + 1] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.log(selecionSort(arr))