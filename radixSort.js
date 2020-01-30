/*
 *  基数排序
 */
let Arr = [4, 6, 8, 5, 9, 1, 16, 10, 3, 2];

function radixSort(A) {
    function getDigits(num) {
        let sum = 0;
        while(num) {
            sum++;
            num = parseInt(num / 10);
        }
        return sum;
    }

    let max = Math.max(...A);
    let maxDigits = getDigits(max);

    let counter = [];
    let mod = 10;
    let dev = 1;

    for(let i = 0; i < maxDigits; i++, mod*=10, dev*=10) {
        for(var j = 0; j < A.length; j++) {
            let bucket = parseInt(A[j] % mod / dev);

            if(counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(A[j]);
        }
        let pos = 0;
        for(let j=0; j<counter.length;j++) {
            let value = null;
            if(counter[j]!=null) {
                while((value = counter[j].shift())!=null) {
                    A[pos++] = value;
                }
            }
        }
    }
}

radixSort(Arr);

console.log(Arr);
