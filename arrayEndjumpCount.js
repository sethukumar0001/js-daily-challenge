function arrayEndJump(arr) {

    let ladder = arr[0];
    let stirs = arr[0];
    let jump = 1;

    if (arr.length <= 1) {
        return 0;
    }

    for (let i = 1; i < arr.length - 1; i++) {
        if (i + arr[i] > ladder)
            ladder = i + arr[i]
        stirs--;
        if (stirs === 0) {
            jump++;
            stirs = ladder - i
        }

    }
    //d
    return jump

}
var arr = [1, 4, 3, 7, 1, 2, 6, 7, 6, 10];

console.log(arrayEndJump(arr))