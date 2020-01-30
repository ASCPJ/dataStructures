let Arr = [4, 6, 8, 5, 9, 1, 16, 10, 3, 2];

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function quickSort(arr) {
    function recursive(A, i, j) {
        if(i >= j) return;
        let index = partition(A, i, j);
        recursive(A, i, index - 1);
        recursive(A, index + 1, j);
        return A;
    }
    function partition(A, i, j) {
        let temp = A[i];
        while(i < j) {
            while(i < j && A[j] > temp) j--;
            if(i < j) A[i++] = A[j];
            while(i<j && A[i] < temp) i++;
            if(i<j) A[j--] = A[i]
        }
        A[i] = temp;
        return i;
    }
    return recursive(arr, 0, arr.length - 1);
}


console.time('quickSort');
let sortArr = quickSort(Arr);
console.log(sortArr);
console.timeEnd('quickSort');
