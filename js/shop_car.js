// GET SHOPPING CAR PRODUCTS
const shopCar = document.querySelector('.product-shopCar');
const iconShopCar = document.querySelector('.navbar-shopping-cart');
iconShopCar.addEventListener('click', showShopCar);

function showShopCar(){
    shopCar.classList.toggle('inactive');
}
