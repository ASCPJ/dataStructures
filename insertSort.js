let sortArr = [15,54,26,9,45,38,76,52];

function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > temp) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

insertSort(sortArr);

console.log(sortArr);
