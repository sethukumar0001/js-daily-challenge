function getMinDiff(arr, n,k) {
    let ans = arr[n-1] - arr[0];
    let  smallest = arr[0] + k;
    let largest = arr[n-1]-k;
    for(let i = 0; i < n-1; i++){
        let min = Math.min(smallest, arr[i+1]-k);
        let max = Math.max(largest, arr[i]+k);
        if(min < 0) 
            continue;
        ans = Math.min(ans, max-min);
    }
    return ans;
}

console.log(getMinDiff([1,5,8,10],4,2))