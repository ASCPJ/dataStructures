let sortArr = [15,54,26,9,45,38,76,52];

function swap(arr, left, right) {
    let rightVal = arr[right];
    arr[right] = arr[left];
    arr[left] = rightVal;
}

function selectSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }
}

selectSort(sortArr);

console.log(sortArr);
