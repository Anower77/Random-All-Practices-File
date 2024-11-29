var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]

const unique = (arr)=>{
    let emptyArr = []
    for(let i=0; i<arr.length; i++) {
    
        let isUni = false

        for(let j=0; j<emptyArr.length; j++) {
            if(arr[i] == emptyArr[j]) {
                isUni = true
                break
            }
        }

        if(!isUni) {
            emptyArr.push(arr[i])
        }
    }
    return emptyArr
}


console.log(unique(numbers))