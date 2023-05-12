let cart = document.getElementById('basket'),
  pay = document.getElementById('left')

const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || []
}

const listProducts = (products) => {
  products.forEach(product => {
    cart.innerHTML += `
        <article class="border-2b">
        <div class="border-2-boxb">
          <img src="/img/products/${product.imagen1}" alt="" />
        </div>
        <div>
          <h3 class="product-1b">${product.name}</h3>
        </div>
        <div>
          <ul type="none">
            <li>US$ ${product.value} </li>
            <li><button onclick="deleteItem(${product.id})">Eliminar</button></li>
          </ul>
        </div>
      </article>
        `
  })
}

const listPay = () => {
  let price = 0,
   basket = getCart()

   basket.forEach(element => {
    price += element.value
   })

  pay.innerHTML += `
        <h2 class="tittleb">Total: $US ${price}</h2>
        <article>
          <button type="submit" class="n-buttonb">PAGAR</button>
        </article>
        <article class="border-1b">
          <h3 class="promob">Promociones</h3>
          <input type="search" class="varb" />
          <button type="submit" class="buttonb">Aplicar</button>
        </article>
        `

}

const deleteItem = async (id) => {
  let basket = getCart(),
    newBasket = basket.filter(element => element.id != id)
  localStorage.setItem('cart', JSON.stringify(newBasket))
  window.location.reload()
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('Ready..')
    let products = getCart()
    listProducts(products)
    listPay(products)
  } catch (error) {
    console.log(error)
  }
})