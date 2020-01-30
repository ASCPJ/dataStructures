let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3, 9,19,34];

function quickSort(arr, i, j) {
    if(i < j) {
        let left = i;
        let right = j;
        let pivot = arr[i];

        while(i < j) {
            while(arr[j] >= pivot && i < j) {
                j--;
            }
            if(i < j) {
                arr[i++] = arr[j]
            }
            while(arr[i] <= pivot && i < j) {
                i++
            }
            if(i < j) {
                arr[j--] = arr[i]
            }
        }
        arr[i] = pivot;
        quickSort(arr, left, i - 1);
        quickSort(arr, i + 1, right);
        return arr;
    }
}


let sortArr = quickSort(arr, 0, arr.length - 1);

console.log(sortArr);
