/*
 * 桶排序
 * 思路：
 * 1.取最大值和最小值的差值，除以桶的数量（数量要小于数组长度），得到桶容量的递增值
 * 2.创建一个二维数组，里面的元素也是数组（相当于桶）
 * 3.遍历原数组往对应的桶里面放数据，放的的时候通过插入排序找到对应的位置再插入
 * 4.合并桶中的数据
 */
let Arr = [4, 6, 8, 5, 9, 1, 16, 10, 3, 2];

function bucketSort(A, num = 5) {
    num = num < A.length ? num : A.length;
    let max = Math.max(...A);
    let min = Math.min(...A);
    let range = Math.ceil((max - min) / num);

    let arr = Array.from(Array(num)).map(() => Array().fill(0));

    for(let i=0;i<A.length;i++) {
        let val = A[i];
        let index = Math.ceil((val - min) / range);
        index = index >= num ? num - 1 : index;
        let temp = arr[index];
        let j = temp.length - 1;
        while(j>=0 && val < temp[j]) {
            temp[j+1] = temp[j]
            j--
        }
        temp[j+1] = val
    }

    let res = [].concat.apply([], arr);
    return res;
}
console.time('bucketSort')
let sortArr = bucketSort(Arr);
console.timeEnd('bucketSort')
console.log(sortArr);
