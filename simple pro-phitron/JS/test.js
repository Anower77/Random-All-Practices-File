
// const checkName = (arr) => {
//     let bigName = arr[0]
    
//     for(let i=1; i<arr.length; i++) {
//         if(bigName.length < arr[i].length) {
//             bigName = arr[i]
//         }
//     }
//     return bigName
// }


// const name = ["anower", "hossain", "rohan", "bangladesh"]
// console.log(checkName(name))





console.log(typeof(isArray()))





// const numbers = [8,9,10,23,39,11,12,13,14,15,2,4,12,20,30]

// const oddEven = (arr) => {
//     const odd = []
//     const even = []
//     for(var i=0; i<arr.length; i++) {
//         if(arr[i] % 2 == 1) {
//             odd.push(arr[i]) 
//         } else {
//             even.push(arr[i]) 
//         }
//     }
//     return { odd, even }

// }

// console.log(oddEven(numbers))








// var res = _.chunk(['a', 'b', 'c', 'd'], 2)
// console.log(res)






















// For Each 

// const product = [
//     {id:1, name:"xioami", description:"This is Xiaomi", price:5000, color:"black"},
//     {id:2, name:"lokio", description:"This is lokoi", price:2200, color:"yellow"},
//     {id:3, name:"samusumg", description:"This is samusumg", price:8000, color:"black"},
//     {id:4, name:"Nokia", description:"This is Nokia", price:1000, color:"white"},
//     {id:5, name:"Iphone", description:"This is Iphone", price:7000, color:"black"},
// ]



// const res = product.forEach(product=>{
//     console.log(product.id)
//     console.log(product.name)
// })
// console.log(res)





// const res = product.map(product=>product.id * 2) // do any calculation
// console.log(res)
// Filter

// const product = [
//     {id:1, name:"xioami", description:"This is Xiaomi", price:5000, color:"black"},
//     {id:2, name:"lokio", description:"This is lokoi", price:2200, color:"yellow"},
//     {id:3, name:"samusumg", description:"This is samusumg", price:8000, color:"black"},
//     {id:4, name:"Nokia", description:"This is Nokia", price:1000, color:"white"},
//     {id:5, name:"Iphone", description:"This is Iphone", price:7000, color:"black"},
// ]

// const res = product.filter(product => product.color == "black")
// console.log(res)

















// find 
// const product = [
//     {id:1, name:"xioami", description:"This is Xiaomi", price:5000, color:"black"},
//     {id:2, name:"lokio", description:"This is lokoi", price:2200, color:"yellow"},
//     {id:3, name:"samusumg", description:"This is samusumg", price:8000, color:"black"},
//     {id:4, name:"Nokia", description:"This is Nokia", price:1000, color:"white"},
//     {id:5, name:"Iphone", description:"This is Iphone", price:7000, color:"black"},
// ]


// Traditional way 
// for(var i=0; i<product.length; i++) {
//     if(product[i].id == 3) {
//         console.log(product[i])
//     }
// }

// // ES6
// const res = product.find(product => product.id == 3)
// console.log(res)













// Arrow Function 
// const sum = (num1, num2) => num1 + num2
// console.log(sum(10, 20))









// Object Di-structor 
// const person = {
//     name: "Hossain",
//     age: 100,
//     friends: ["rohan", "hossain", "shahdat"]
// }
// const { name,friends,age } = person
// console.log(friends)

// // Array Di-structor 
// const numbers = [100,200,300]
// const [one, two, three] = numbers
// console.log(three)










// Spread Operator (...) Another example

// var numbers = [1, 2, 3]
// var newNumber = [...numbers, 4, 5, 6]
// console.log(newNumber)







// const numbers = [1,2,3,4,5,6,7,8,9]
// const [one, two, ...others] = numbers 

// console.log(numbers)















// const obj_1 = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }

// const obj_2 = {
//     type: 'car',
//     year: 2021,
//     color: 'Yellow'
// }

// console.log({...obj_1, ...obj_2})










// const arr1 = [1,2,3,4,5,6,7]
// const arr2 = [8,9,10,11,12,13,14,15]


// // console.log(...arr1)
// // console.log([arr1, arr2])
// console.log(...arr1, ...arr2)





// const countryName = "Bangladesh"

// const country = `The name of country ${countryName}`

// console.log(country)








// function sum() {
//     const h = 10 
//     if(true) {
//         let hh = 100
//     }
    
//     if(true) {
//         console.log(h)
//     }
// }

// sum()









// var test = "test"
// var friends  = [
//     'hossin', 10, 'rohan', test, { name: 'shanto' }, ['anower', 'hossain']
// ]


// for(var i=0; i<friends.length; i++) {
//     console.log(friends[i])
// }










// friends.push("monia") // after add ele
// friends.pop() // after pop ele

// friends.unshift("monia") // before add ele
// friends.shift() // before pop ele

// console.log(friends.length)








// x, y = 5, 5 

// var x = x && (x = y)
// console.log(x)


// var person = {
//     name: "Hossaon",
//     age : 25,
//     friends:['Rohan', 'Abdullah', 'Shahadat'],
//     friends_n : {
//         name: 'Johe',
//         age: 61
//     }
// }

// console.log(person.name)
// console.log(person.age)
// console.log(person.friends)
// console.log(person.friends_n)







