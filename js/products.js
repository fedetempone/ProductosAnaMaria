const cardsContainer = document.querySelector('.cards-container');
//GET SHOPPING CART PRODUCTS DETAILS
const productDetails = document.querySelector('#productDetail');
//GET CLOSEBUTTON OF THE SECTION PRODUCT DETAILS
const closeButton = document.querySelector('.product-detail-close');
closeButton.addEventListener('click', closeShowDetailsProducts);



const productList = [];
productList.push({
    name: 'Aceite de Oliva Extra Virgen',
    price: 750,
    img: './img/productos/aceite_de_oliva_cocinero.jpg',
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Aceite de Oliva',
    price: 730,
    img: './img/productos/aceite_de_oliva_comun.jpg',
    id: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Aceite de Oliva Comun San Agustin',
    price: 650,
    img: './img/productos/aceite-san-agustin.jpg',
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Aceitunas Negras',
    price: 1000,
    img: './img/productos/aceitunas-negras.jpg',
    id: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Aceitunas Verdes',
    price: 1500,
    img: './img/productos/aceitunas-verdes.jpg',
    id: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Almendras con Chocolate',
    price: 1200,
    img: './img/productos/almendras-con-chocolate.jpg',
    id: 6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Almendras',
    price: 200,
    img: './img/productos/almendras.jpg',
    id: 7,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Almohaditas de Frutilla',
    price: 300,
    img: './img/productos/almohadillas-frutilla.jpg',
    id: 8,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Almohaditas de Avellana',
    price: 1000,
    img: './img/productos/almohadillas-rellenas.jpg',
    id: 9,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});
productList.push({
    name: 'Anana en Cubos',
    price: 1500,
    img: './img/productos/anana-cubos.jpg',
    id: 10,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut id atque saepe perferendis blanditiis obcaecati officia molestiae repudiandae assumenda debitis maxime alias nobis, ipsa vel vero sint porro dolorem.'
});


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
        if (!productDetails.contains(event.target)) {
            productDetails.classList.add('inactive');
        }
    });
}


