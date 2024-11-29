// const allBox = document.getElementsByClassName("box")
// console.log(allBox)


// for(let i=0; i<allBox.length; i++) {
//     const ele = allBox[i]
//     console.log(ele)
//     ele.style.background = "skyblue "

//     if(ele.innerText == "box-5") {
//         ele.style.background = "yellow" 
//     }
// }




// Traditiona method and popular
document.getElementById("btn").addEventListener("click", (event)=>{
    const inVal = document.getElementById("search-box").value

    const container = document.getElementById("comment-container")
    const p = document.createElement("p")
    p.classList.add("child")
    p.innerText = inVal

    container.appendChild(p)

    document.getElementById("search-box").value = ""

    const allComment = document.getElementsByClassName("child")
    // console.log(inVal)
    
    // console.log(allComment)
    for(const element of allComment) {
        element.addEventListener("click", (e)=>{
            e.target.parentNode.removeChild(element)
        })
    }
})



fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
        displayData(data)
    })
    .catch((arr)=> {
        console.log(arr)
    })


    const displayData = (userData) =>{
        const container = document.getElementById("userData-container")

        userData.forEach(user => {
            // console.log(user)
            const div = document.createElement("div")
            div.classList.add("user")


            div = `
                <h3>Title</h3>
                <p> Description</p>
                <button>Details </button>
                `

            container.appendChild(div)

        })
    }






// morden way 
// const searchBtn = (event)=>{
//     console.log("hossain")
// }


// https://webinars.w3schools.com/webinar/17442/join/8954878
 













