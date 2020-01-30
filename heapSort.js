// 交换两个节点
function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

/*
 *  堆排序思路：
 *  1.先将数组改造成符合堆的定义
 *      堆的定义
 *          大堆顶：每个节点都比它的子节点大，小堆顶：每个节点都比它的子节点小，子节点公式：2*i+1,2*i+2
 *  2.将堆顶元素与数组最后一个元素交换位置，数组长度减1
 *
 *  3.重复上面步骤
 *
 */

/*
 *  将数组初始化成堆的函数
 */
function adjustHeap(A, i, length) {
    let temp = A[i] //当前父节点的值

    for(let j = 2*i+1; j<length; j = 2*j+1) {
        if(j+1<length && A[j] < A[j+1]) {
            j++
        }
        if(temp < A[j]) {
            swap(A, i, j);
            i = j;
        } else {
            break;
        }
    }
}

function heapSort(A) {
    console.time('heap')
    //从第一个非叶子节点初始化堆
    for(i = Math.floor(A.length/2 - 1); i >= 0; i--) {
        adjustHeap(A, i, A.length);
    }
    for(let i = A.length - 1; i>0; i--) {
        swap(A, 0, i);
        adjustHeap(A, 0, i);
    }
    console.timeEnd('heap');
}

let Arr = [4, 6, 8, 5, 9, 1, 16, 10, 3, 2];

heapSort(Arr);

console.log(Arr);
