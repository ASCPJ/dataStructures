/*
 * 计数排序
 * 思路：
 *  1.新建一个临时数组，将原数组的值作为键，值的数量作为值，默认1，
 *  2.遍历临时数组，从最小值到最大值（下标），将下标作为值存进一个新的数组
 */
let Arr = [4, 6, 8, -5, 9, 1, 16, 10, -3, 2];

function countSort(A) {
    let arr = [];
    let max = Math.max(...A);
    let min = Math.min(...A);
    let add = -min;

    for(let i=0; i<A.length; i++) {
        let temp = A[i];
        temp += add;
        arr[temp] = arr[temp] + 1 || 1;
    }
    console.log(arr);
    let index = 0;
    for(let i=min; i<=max; i++) {
        let temp = arr[i + add];
        while(temp > 0) {
            A[index++] = i;
            temp--;
        }
    }
    return A
}

console.time('countSort');
let sortArr = countSort(Arr);
console.timeEnd('countSort');

console.log(sortArr);

