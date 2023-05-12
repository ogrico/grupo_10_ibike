let products = []

const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

const addToCart = async (event, element) => {
    event.preventDefault()
    const product = JSON.parse(element)
    console.log(product)
    let newProduct = {
        id: product.id,
        name: product.name,
        value: product.value,
        imagen1: product.imagen1,
    }
    console.log(newProduct)
    products.push(newProduct)
    storage(products)
    window.location.href = '/basket'
}

const storage = (products) => {
    localStorage.setItem('cart', JSON.stringify(products))
    console.log("local", localStorage.getItem('cart'))
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        products = getCart()
    } catch (error) {
        console.log(error)
    }
})