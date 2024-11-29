const arr = [18, 3, 2, 16, 17, 12, 1, 4, 6, 5, 8, 7, 9, 11, 14, 10, 13, 20, 19, 15];

const sort = (arr)=> {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }       
    }
    return arr
}

console.log(sort(arr))