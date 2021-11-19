

let arr1 = [5, 3, 23, 10, 15, 9, 8];
let arr2 = [15, 13, 23, 10, 15, 19, 18];


const unionArray = (arr1,arr2) => {
    var s = new Set();

for (let i = 0; i < arr1.length; i++) {
    s.add(arr1[i])    
}
for (let i = 0; i < arr1.length; i++) {
    s.add(arr2[i])    
}

    return s;
}

console.log(unionArray(arr1,arr2))





let arr1 = [5, 3, 23, 10, 15, 9, 8];
let arr2 = [15, 13, 23, 10, 15, 19, 18];


// const intersectionArray = (m,n) => {
//     var mp = new Map();
     
//     // Inserting array elements in mp
//     for(var i = 0; i < n.length; i++)
//     {
//         mp.set(m[i], i);
//     }
//     for(var i = 0; i < m.length; i++)
//     {
//         mp.set(n[i], i);
//     }

//     for(var key of mp.keys())
//     {
//             key + " "
 
//     }

//     return mp;
// }

// console.log(intersectionArray(arr1,arr2))