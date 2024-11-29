var result = 30

if(result < 0) {
    console.log("Failed")
} else if (result >= 0 && result < 40) {
    console.log("You got a C grede")
} else if (result >= 40 && result < 60) {
    console.log("You got a B grede")
} else if (result >= 60 && result < 80) {
    console.log("You got a A- grede")
} else if (result >= 80 && result < 100) {
    console.log("You got a A+ grede")
} else {
    console.log("Invalid result..!!")
}