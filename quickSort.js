

let arr = [5, 3, 23, 10, 1, 9, 8];
function quickSort(arr, l, r) {
    if (arr.length > 1) {
        var index;
        index = Partition(arr, l, r);
        if (l < index - 1) {
            quickSort(arr, l, index - 1)
        }
        if (r > index) {
            quickSort(arr, index, r)
        }

    }
    return arr;
}


function Partition(arr, l, r) {
    let pivot = arr[Math.floor((l + r) / 2)];
    let i = l;
    let j = r;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}


function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp
}


console.log(quickSort(arr, 0, arr.length - 1))