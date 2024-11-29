const guideList = document.getElementById("guide-list")
const searchBar = document.getElementById("searchBar")

let users = []
let guideMembers = []

const fetchUsers = () => {
    fetch(`https://randomuser.me/api/?results=12`)
        .then(res => res.json())
        .then(data => {
            users = data.results
            cardUsers(users)
            updateCounts()
        })
        .catch(err => 
            console.log("Fetching Error...", err)
        )
}

// card user 
const cardUsers = (userList) => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = ''
    
    userList.forEach((user, index) => {
        cardContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
                    <div class="card-body">
                        <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                        <p class="card-text">${user.email}</p>
                        <button class="btn btn-info" onclick="showDetails(${index})">Details</button>
                        <button class="btn btn-success" onclick="addToGuiders(${index})">Add to Group</button>
                    </div>
                </div>
            </div>
        `
    })
}

// count 
const updateCounts = () => {
    const totalMembers = users.length
    const males = users.filter(user => user.gender == 'male').length
    const females = users.filter(user => user.gender == 'female').length

    document.getElementById('total-members').innerText = totalMembers
    document.getElementById('total-male').innerText = males
    document.getElementById('total-female').innerText = females
}

// add user guide 
const addToGuiders = (index) => {
    const user = users[index]
    // if (guideMembers.some(g => g.email == user.email)) return
    const isAlreadyInGuiders = guideMembers.some(guider => guider.email == user.email)
    if (isAlreadyInGuiders) return
    
    guideMembers.push(user)
    guideList.innerHTML += `
        <div class="guider-card">
            <h5>${user.name.first} ${user.name.last}</h5>
            <p>Role: Guider</p>
            <p>${user.email}</p>
        </div>
    `
}

// user details 
const showDetails = (index) => {
    const user = users[index]
    const modalContent = document.getElementById("modal-content")
    modalContent.innerHTML = `
        <h5>${user.name.first} ${user.name.last}</h5>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
        <p>Phone: ${user.phone}</p>
        <img src="${user.picture.large}" alt="${user.name.first}" class="img-fluid">
    `

    const modal = new bootstrap.Modal(document.getElementById('detailsModal'))
    modal.show()
}

// search 
searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase()
    const filteredUsers = users.filter(user => 
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(query)   
    )
    cardUsers(filteredUsers)
})

fetchUsers()
