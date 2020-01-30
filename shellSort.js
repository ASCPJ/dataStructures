let arr = [10, 3, 1, 5, 11, 2, 0, 6, 3, 9,19,34];

/*
 *  希尔排序。
 *  思路：1.设置一个增量（间隔）
 */

function shellSort(arr) {
    let len = arr.length;
    let gap = parseInt(len / 2);
    while(gap) {
        for(let i = gap; i < len; i++) {
            for(let j = i - gap; j >= 0; j-=gap) {
                if(arr[j] > arr[j + gap]) {
                    [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]]
                }else {
                    break;
                }
            }
        }
        gap = parseInt(gap / 2);
    }
}

shellSort(arr);

console.log(arr);
