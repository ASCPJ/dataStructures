let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3, 9];

function mergeArr(left, right) {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return arr.concat(left, right);
}

function mergeSort(arr) {
    if(arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return mergeArr(mergeSort(left), mergeSort(right));
    } else {
        return arr;
    }
}

let sortArr = mergeSort(arr);

console.log(sortArr);
