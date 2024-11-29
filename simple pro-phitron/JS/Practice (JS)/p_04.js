const isLeapYear = (year)=>{
    if(((year%4 == 0) && (year%100 != 0)) || year%400 == 0){
        return console.log(`${year} is Leap Year..!!`)
    } else {
        return console.log(`${year} is Not Leap Year..!!`)
    }
}

isLeapYear(2024)
isLeapYear(2023)
isLeapYear(2022)
isLeapYear(1900)