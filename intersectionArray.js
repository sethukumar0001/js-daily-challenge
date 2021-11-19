

let arr1 = [5, 3, 23, 10, 15, 9, 8];
let arr2 = [15, 13, 23, 10, 15, 19, 18];


function intersection(a,b,n,m){
let i = 0, j = 0; arr = []
        while (i < n && j < m)
        {
            if (a[i] > b[j])
            {
                j++;
            }
            else if (b[j] > a[i])
            {
                i++;
            }
            else
            {
                // when both are equal
                 arr.push(a[i]);
                i++;
                j++;
            }
        }
        return arr;
}

let a = [1, 3, 2, 3, 4, 5, 5, 6 ];
let b = [3, 3, 5 ]

let n = a.length;
let m = b.length;

console.log(intersection(a, b, n, m))

