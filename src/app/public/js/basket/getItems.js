let cart = document.getElementById('basket')

const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

const listProducts = async (products) => {
    products.forEach(product => {
        cart.innerHTML += `
        <article class="border-2">
        <div class="border-2-box">
          <img src="/img/products/${product.imagen1}" alt="" />
        </div>
        <div>
          <h3 class="product-1">${product.name}</h3>
        </div>
        <div>
          <ul type="none">
            <li>US$ ${product.value} </li>
            <li>Eliminar</li>
            <li>Mover a Favoritos</li>
          </ul>
        </div>
      </article>
        `
    })
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        let products = getCart()
        listProducts(products)
    } catch (error) {
        console.log(error)
    }
})