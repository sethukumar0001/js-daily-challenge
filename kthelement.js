let arr = [5, 3, 23, 10, 1, 9, 8];

const kthSmallest = (arr, low, high, k)=>{
    const border = partition(arr, low, high);
    if(border == k){
        return arr[k];
    }else if(border < k) {
        return kthSmallest(arr, border + 1, high, k);
    }else if(border > k) {
        return kthSmallest(arr, low, border - 1, k);
    }
    return -1;
}

const partition = (array, low, high) => {
const pivot = array[high];
let i = low - 1;
let temp;
for(let j = low; j< array.length; j++){
 if(pivot > array[j]){
    i++;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }
}
temp = array[i + 1];
array[i + 1] = array[high];
array[high] = temp;
return i + 1;
}


console.log(kthSmallest(arr, 0, arr.length - 1,4))