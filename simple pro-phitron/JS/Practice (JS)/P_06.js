var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"]

const bigFriend = (arr)=> {
    let bigFri = arr[0]

    for(let i=0; i<arr.length; i++) {
        if(bigFri.length < arr[i].length) {
            bigFri = arr[i]
        }
    }

    return bigFri
}

console.log(bigFriend(friends))