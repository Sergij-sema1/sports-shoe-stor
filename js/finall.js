const dataFromCookie = document.cookie;
const DbUrl = "http://localhost:8080/shop/model";
const sliderImg = document.querySelector(".mainImg");
const SliderList = document.querySelector(".listImg");
const firstButtonSlider = document.querySelector(".btn1");
const secondButtonSlider = document.querySelector(".btn2");
const mainSlider = document.querySelector(".MainSlider");
const dataItem = document.querySelector(".shortDescription");
const buttonAddToCart = document.querySelector(".btn3");

//массив корзина
let cartDataArray = [];
//размер обуви
let sizeData = [];
//localStorage.setItem('cartData', JSON.stringify(cart));


//функцыя делает запрос к базе для получения данных
const GetdadaItem = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`ошибка по адресу :${url},
    код ошибки :${response.status}`);
    }
    return response.json();
};

//выбераем размер и он меняет цвет для визуальной фиксацыи
const SizeSelected = (event) => {
    const ul = document.querySelector('.sizBox');
    const li = ul.getElementsByTagName('li');
    const target = event.target;

    if (target.nodeName == "LI") {

        target.classList.add('red');
        sizeData.push(target.textContent);
        // console.log(sizeData)
        //document.removeEventListener('click', SizeSelected);
    }

};
//функцыя создает структуру страницы (картинки и размеры с данных полученных от бд)
const createItem = (ProductList) => {
    localStorage.setItem("item", JSON.stringify(ProductList));
    const {
        id,
        brandid,
        img,
        name,
        description,
        description_second,
        price,
    } = ProductList;

    const cardItem = `<img
     src="/img/brands_shouse_foto/${img}"
     class="mainImg"
     alt=""
        />

        <div class="box">
            <ul class="listImg sizBox">
            <li id="1">37</li>
            <li id="2">38</li>
            <li id="3">39</li>
            <li id="4">40</li>
            <li id="5">41</li>
            <li id="6">42</li>
            <li id="7">43</li>
            <li id="8">44</li>
            <li id="9">45</li>
            <li id="10">46</li>
            <li id="11">47</li>
          </ul>
        </div>
`;

    mainSlider.insertAdjacentHTML("beforeend", cardItem);
    const cartDescription = ` <p>${description},${price}</p>`;
    dataItem.insertAdjacentHTML("beforeend", cartDescription);
};

//функция после вызова обрабатывает нажатие нажатых клавиш слайдера
const clickButton = (item) => {
    console.log(item.srcElement);
};

GetdadaItem(DbUrl, dataFromCookie).then((data) => {
    const item = data;
    const valueData = item.filter((i) => {
        return i.id == `${dataFromCookie}`;
    });
    valueData.forEach(createItem);
});

// функцыя добавляет товар в крзину путьом создания елемента внедрение его на страницу и потом пушит в масив
const addToCart = (event) => {
    const itemDataFromLocal = JSON.parse(localStorage.getItem("item"));
    const modalx = document.querySelector('.modal-x');
    modalx.style.display = 'none';


    const {
        id,
        brandid,
        img,
        name,
        description,
        description_second,
        price,
    } = itemDataFromLocal;

    const cardBody = document.querySelector(".modal-header");


    if (buttonAddToCart) {
        const checkCard = document.querySelector('.item-in-cart');
        if (!checkCard) {
            const card = `
            <div class = "modal-body item-in-cart" id = "${id}">
                <div class="food-row">
            		<span class="food-name">${name}</span>
            		<strong class="food-price">${price}₽</strong>
            		<div class="food-counter">
            			<button class = "counter-button buttonP"> - </button>
            			<span class="counter">1</span>
            			<button class = "counter-button buttonM"> + </button>
            		</div>
                </div> 
            </div>`;
            // const card = ` 
            // <div class = "modal-body item-in-cart" id = "${id}" >
            //         <div class = "food-row" >
            //             <span class = "food-name" >  < /span> <
            //             span class = "food-name" > < /span> <
            //             strong class = "food-price" >  < /strong> 
            //          <div class = "food-counter" >

            //             <button class = "counter-button-P" > - < /button> <
            //             span class = "counter" > 1 < /span> <
            //             button class = "counter-button-M"> + </button> 
            //             </div> 
            //         </div> 
            // </div>`;
            cardBody.insertAdjacentHTML('afterend', card);



        }
        buttonAddToCart.style.color = 'red';
        const itemId = document.querySelector('.item-in-cart').id;
        const itemCount = document.querySelector('.counter').textContent;

        const itemName = document.querySelector('.food-name').textContent;
        const itemPrice = document.querySelector('.food-price').textContent;
        const itemSize = JSON.stringify(Number.parseFloat(sizeData)); //угар)

        // buttonAddToCart.removeEventListener('click', addToCart);
        buttonAddToCart.textContent = ' товар в корзине';







        const product = cartDataArray.find((productCheck) => {
            return productCheck.itemId === itemId;
        })
        //localStorage.setItem(' cartData', JSON.stringify(cartDataArray));



        if (product) {

            product.itemCount++;
            const itemCountInDom = document.querySelector('.counter');
            itemCountInDom.textContent = `${product.itemCount}`;

            const buttonPlus = document.querySelector('.counter-button');
            const buttonMinus = document.querySelector('.counter-button');

        } else {
            cartDataArray.push({
                itemId,
                itemName,
                itemPrice,
                itemSize,
                itemCount
            });




        }

    }





};

buttonAddToCart.addEventListener("click", addToCart);
firstButtonSlider.addEventListener("click", clickButton);
secondButtonSlider.addEventListener("click", clickButton);
document.addEventListener("click", SizeSelected);