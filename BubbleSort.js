function checkArray(arr) {
    return Array.isArray(arr);
}

function swap(arr, left, right) {
    let rightVal = arr[right];
    arr[right] = arr[left];
    arr[left] = rightVal;
}

function bubbleSort(arr) {
    if(checkArray(arr)) {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0;j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) swap(arr, j, j+1);
            }
        }
    }
}

let sortArr = [15,54,26,9,45,38,76,52];

bubbleSort(sortArr);

console.log(sortArr);
