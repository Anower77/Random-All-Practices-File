const loadAllProduct= ()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                dispalyProduct(data)
    })
}


const dispalyProduct = (products) => {
    const productContainer = document.getElementById("product-container")

    products.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
            <img class="card-img"src=${product.image}  alt="" />
            <h1>${product.title}</h1>
            <h3>Price : ${product.price}</h3>
            <p>${product.description}</p>
            <button onclick="singleProduct('${product.id}')">Details</button>
            <button onclick="handleAddToCart('${product.title}', '${product.price}')">Add to cart</button>
        `
        productContainer.appendChild(div)
    });
}



const handleAddToCart = (name, price) => {
    const cartCount = document.getElementById("count").innerText
    let convertedCount = parseInt(cartCount)    
    convertedCount += 1
    document.getElementById("count").innerText = convertedCount

    // console.log(convertedCount)

    const container = document.getElementById("cart-main-container")

    const div = document.createElement("div")
    div.classList.add("cart-info")
    div.innerHTML = `
        <p>${name}</p>
        <h3 class="price">${price}</h3>
    `
    container.appendChild(div)
    updateTotal()
}


const updateTotal = () => {
    const allPrice = document.getElementsByClassName("price")
    
    let count = 0
    for(const element of allPrice) {
        count += parseFloat(element.innerText)
    }

    document.getElementById("total").innerText = count.toFixed(2)

}





const singleProduct = (id) => {
    console.log(id)
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
}






loadAllProduct()