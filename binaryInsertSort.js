let sortArr = [15,54,26,9,45,38,76,52];

function binaryInsertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let left = 0;
        let right = i - 1;
        while(left <= right) {
            let mid = parseInt((left + right) / 2);
            if(temp < arr[mid]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }
        for(let j = i - 1; j >= left; j-- ) {
            arr[j+1] = arr[j];
        }
        arr[left] = temp;
    }
}

binaryInsertSort(sortArr);

console.log(sortArr);
