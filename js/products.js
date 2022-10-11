const cardsContainer = document.querySelector('.cards-container');
// GET CART'S OF PRODUCTS DETAILS
const productDetails = document.querySelector('#productDetail');
// GET CLOSEBUTTON OF THE SECTION PRODUCT DETAILS
const closeButton = document.querySelector('.product-detail-close');
closeButton.addEventListener('click', closeShowDetailsProducts);
// GET SHOPPING CAR PRODUCTS
const shopCar = document.querySelector('.product-shopCar'); //section product-shopCar (father)
const myOrderContent = document.querySelector('.my-order-content'); //div second child of product-shopCar section (the first child is title-container)
const shoppingCart = document.querySelector('.shopping-cart'); //div first child of my order content div
const dataProducts = document.querySelector('.dataProducts');//div second child of my order content div
// ICON FROM SHOPPING CART INSIDE OF THE NAVBAR
const iconShopCar = document.querySelector('.navbar-shopping-cart');
iconShopCar.addEventListener('click', showShopCar);
// GET ARROW ICON FROM THE SHOP CAR
const arrowIcon = document.querySelector('.arrow-shopCar');
arrowIcon.addEventListener('click', closeShoppingCar);
// PARRAGRAPH FROM THE TOTAL AMOUNT OF THE ADDITION TOTAL OF PRODUCTS
const parrafoCantidadTotal = document.getElementById('parrafoCantidadTotal');

// ARRAY WITH PRODUCTS AND QUANTITY
let carrito = []; 

// ARRAY WITH PRODUCTS WITH JASON
const productList = [{  
    name: 'Aceite de Oliva Extra Virgen',
    price: 750,
    img: './img/productos/aceite_de_oliva_cocinero.jpg',
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Aceite de Oliva',
    price: 730,
    img: './img/productos/aceite_de_oliva_comun.jpg',
    id: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Aceite de Oliva Comun San Agustin',
    price: 650,
    img: './img/productos/aceite-san-agustin.jpg',
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Aceitunas Negras',
    price: 1000,
    img: './img/productos/aceitunas-negras.jpg',
    id: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Aceitunas Verdes',
    price: 1500,
    img: './img/productos/aceitunas-verdes.jpg',
    id: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Almendras con Chocolate',
    price: 1200,
    img: './img/productos/almendras-con-chocolate.jpg',
    id: 6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Almendras',
    price: 200,
    img: './img/productos/almendras.jpg',
    id: 7,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Almohaditas de Frutilla',
    price: 300,
    img: './img/productos/almohadillas-frutilla.jpg',
    id: 8,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Almohaditas de Avellana',
    price: 1000,
    img: './img/productos/almohadillas-rellenas.jpg',
    id: 9,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
{
    name: 'Anana en Cubos',
    price: 1500,
    img: './img/productos/anana-cubos.jpg',
    id: 10,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
}, 
];

function renderProducts(arr){
for (product of arr){
   //<div class="product-card">
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');
   
   //<img src="link de la imagen" alt="">

   const productImage = document.createElement('img');
   productImage.setAttribute('src', product.img);
   
   //<div class="product-info">
   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');
   productImage.addEventListener('click', showProductDetails);
   productImage.newIdOfProduct = product.id;
  
   
   //<div>
   const productEmptyDiv = document.createElement('div');

   //<p>PRICE</p>
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   
   //<p>PRODUCTNAME</p>
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   //<figure>
   const productFigure = document.createElement('figure');
   
   //<img src="./icons/bt_add_to_cart.svg" alt="">
   const productFigureImg = document.createElement('img');
   productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
   productFigureImg.addEventListener('click', addProductToShoppingCar);
   productFigureImg.idOf_figureImage = product.id;

   cardsContainer.appendChild(productCard);
   productCard.appendChild(productImage);
   productCard.appendChild(productInfo);
   
   productEmptyDiv.appendChild(productPrice);
   productEmptyDiv.appendChild(productName);

   
   productInfo.appendChild(productEmptyDiv);
   productInfo.appendChild(productFigure);
   productFigure.appendChild(productFigureImg);
    
    }
}

renderProducts(productList);

function closeShowDetailsProducts(){
    productDetails.classList.add('inactive');
}

function showProductDetails(event){
    const newIdOfProduct = event.currentTarget.newIdOfProduct;
    const product = productList.find(product => product.id == newIdOfProduct);
    if (product === undefined) {
        return;
    }
    productDetails.classList.remove('inactive');
    productDetails.classList.add('shadows');
    document.getElementById("product-detail-price").innerHTML = '$' + product.price;
    document.getElementById("product-detail-name").innerHTML = '$' + product.name;
    document.getElementById("product-detail-description").innerHTML = '$' + product.description;
    document.getElementById("product-detail-image").setAttribute("src" , product.img);    
    
    document.addEventListener("mouseup", function(event) {
       dismissModal(productDetails, event);
    });
}

function showShopCar(){
    shopCar.classList.toggle('inactive');
}

function addProductToShoppingCar(event){
    const idOf_figureImage = event.currentTarget.idOf_figureImage;
    const product = productList.find(product => product.id == idOf_figureImage);
    if (product === undefined) {
        return;
    } 

// ADDING TO CAR

    let productoIndice = carrito.findIndex(productoCarrito => productoCarrito.producto.id == product.id);
    if (productoIndice == -1) {
        carrito.push({
            producto: product,
            cantidad: 1
        });
        addHtmlProduct(product);
    } else{
        carrito[productoIndice].cantidad+=1;
        /*
        updateHtmlProduct(product, carrito[productoIndice].cantidad);
        console.log('updatehtmlproduct', product); // producto del array product list que clickiamos en la pagina
        console.log('updatehtmlproduct', carrito[productoIndice].cantidad); // cantidad del producto repetido (individualmente) que clickiamos en la pagina 
        */
    }

    let total = 0;
    for (const productoCarrito of carrito){
        total += productoCarrito.producto.price * productoCarrito.cantidad;
    }

    parrafoCantidadTotal.innerHTML = '$'+ total;

    shopCar.classList.remove('inactive');
    
}


// UPDATE PRODUCT IN HTML

function updateHtmlProduct(product, cantidad) {
    /*
    const parrafoCantidad = document.getElementById('parrafoCantidad ' + product.id);
    console.log(product); //detecta el producto del array productList que clickiamos en la pagina
    console.log(product.id);//detecta el id del producto del array que clickiamos en la pagina
    console.log(cantidad); //detecta la cantidad de productos repetidos (individualmente) q hay en el carrito
    parrafoCantidad.innerHTML = cantidad;// iguala el parrafo a la cantidad de productos que se repiten
    */
}

// ADD PRODUCT IN HTML

function  addHtmlProduct(product) {
    const shopCar_figure = document.createElement('figure');
    const img_shopcar_figure = document.createElement('img');
    img_shopcar_figure.setAttribute('src', product.img);
    const shoPcar_product_name = document.createElement('p');
    shoPcar_product_name.innerText = product.name;
    const shoPcar_product_price = document.createElement('p');
    shoPcar_product_price.innerText = '$' + product.price;

    // <div class="addProducts">
    // <button type="button" class="substractButton"></button>
    // <input type="number" value= "1" class="soppingCarInput">
    // <button type="button" class="addButton"></button>
    // </div>
    const addProducts = document.createElement('div');
    addProducts.classList.add('addProducts');

    const substractButton = document.createElement('button');
    substractButton.type = 'button';
    substractButton.classList.add('QuantityButton');

    const imgMinusButton = document.createElement('img');
    imgMinusButton.setAttribute('src' , './icons/minus.png');

    const shoppingCarInput = document.createElement('input');
    shoppingCarInput.type = 'number';
    shoppingCarInput.value = 1;
    shoppingCarInput.classList.add('shoppingCarInput');

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.add('QuantityButton');

    const imgAddButton = document.createElement('img');
    imgAddButton.setAttribute('src' , './icons/plus.png');

    // const shopCar_product_amount = document.createElement('p');
    // shopCar_product_amount.innerHTML = 1;
    // shopCar_product_amount.id = 'parrafoCantidad ' + product.id;
    const closeIconShopCar = document.createElement('img');
    closeIconShopCar.setAttribute('src', './icons/icon_close.png');
    closeIconShopCar.classList.add('closeIcon');
    closeIconShopCar.addEventListener('click', deletProductFromShoppingCart);
    
    dataProducts.appendChild(shopCar_figure);
    shopCar_figure.appendChild(img_shopcar_figure);
    dataProducts.appendChild(shoPcar_product_name);
    dataProducts.appendChild(shoPcar_product_price);
    dataProducts.appendChild(addProducts);
    addProducts.appendChild(substractButton);
    substractButton.appendChild(imgMinusButton);
    addProducts.appendChild(shoppingCarInput);
    addProducts.appendChild(addButton);
    addButton.appendChild(imgAddButton);
    // dataProducts.appendChild(shopCar_product_amount);
    dataProducts.appendChild(closeIconShopCar);    
        
    function deletProductFromShoppingCart() {
        dataProducts.removeChild(shopCar_figure);
        dataProducts.removeChild(shoPcar_product_name);
        dataProducts.removeChild(shoPcar_product_price);
        dataProducts.removeChild(closeIconShopCar);
        dataProducts.removeChild(addProducts);
        // dataProducts.removeChild(shopCar_product_amount);

    }

    // substractButton.addEventListener('click', substractQuantity);
    // addButton.addEventListener('click', addQuantity);

    // function QuantityManipulator(){
    // if (shoppingCarInput.value != 0) {
    //     substractQuantity();
    //     addQuantity();
    //  }// else if (shoppingCarInput.value = 0) {
    // //     addQuantity;
    // // }
    // }
    
    // function substractQuantity() {
    //     shoppingCarInput.value--;
    // }

    // function addQuantity() {
    //     shoppingCarInput.value++;
    // }
}


document.addEventListener("mouseup", function (event) {
        dismissModal(shopCar, event);
    });

function closeShoppingCar() {
        shopCar.classList.add('inactive');
    }

function dismissModal(htmlElement, listenerEvent) {
        if (!htmlElement.contains(listenerEvent.target)) {
            htmlElement.classList.add('inactive');
        }
    }


//el localStorage seria algo asi..
    // localStorage.setItem("pushCarrito", JSON.stringify(addProductToShoppingCar));
    // localStorage.getItem("pushCarrito", JSON.parse(addProductToShoppingCar));



