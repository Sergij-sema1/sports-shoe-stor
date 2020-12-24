const dataFromCookie = document.cookie;
const DbUrl = "http://localhost:8080/shop/model";
const sliderImg = document.querySelector(".mainImg");
const SliderList = document.querySelector(".listImg");
const firstButtonSlider = document.querySelector(".btn1");
const secondButtonSlider = document.querySelector(".btn2");
const mainSlider = document.querySelector(".MainSlider");
const dataItem = document.querySelector(".shortDescription");
const buttonAddToCart = document.querySelector(".btn3");
const clearCart = document.querySelector('.clear-cart');
const modalPriceTag = document.querySelector('.modal-pricetag');
const buttonPrimary = document.querySelector('.button-Checkout');

const input = `<input type="text" placeholder="Введите имя,телефон для доставки" 
class="brandInput" id="inputSring">`;



// после нажатия оформить будет брать все данных записывать их в базу и через бота в телеграмме будет деать отчет продавцу)
const Checkout = () => {
    const buyerContact = document.querySelector('#inputSring').value;
    const itemName = document.querySelector('.food-name').textContent;
    const itemCount = document.querySelector('.counter').textContent;
    const itemPrice = document.querySelector('.food-price').textContent;
    const itemTotalPrice = document.querySelector('.modal-pricetag').textContent;
    const date = new Date();
    const deliveryData = `
        заказчик : ${buyerContact},
        товар : ${itemName},
        количество : ${itemCount},
        цена : ${itemPrice},
        цена за все количество : ${itemTotalPrice},
        датa совершения заказа : ${date}`;


    const addOrderToDb = async () => {

        // const url = 'http://localhost:8080/shop/order';
        const url = 'http://localhost:8080/shop/order';
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                buyerData: buyerContact,
                item: itemName,
                date: date,
                count: itemCount,
                price: itemPrice,
                TotalPrice: itemTotalPrice

            })
        });
        if (response.ok) {
            return console.log(`add item to db ok `);
        } else {
            return console.log(`add item to db err : ${response.statusText}`);
        }

    }
    addOrderToDb();




};



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
        document.removeEventListener('click', SizeSelected);
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

// функцыя добавляет товар в кoрзину путьом создания елемента внедрение его на страницу и потом пушит в масив
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
        //пока незаработало чтото перемудрил

        const addCountIncard = () => {
            const buttonPlus = document.querySelector('.buttonP');
            const buttonMinus = document.querySelector('.buttonM');
            const total = price;
            const filterCard = cartDataArray.find((productCheck) => {
                return productCheck.itemId === itemId;
            });
            modalPriceTag.textContent = `${price}₽`;
            //перезаписывает коечную цену в зависимости от количества
            const totalPrice = () => {

                modalPriceTag.textContent = `${parseFloat(total)*filterCard.itemCount} ₽`;

            };

            const countAdd = () => {



                if (filterCard.itemCount === 0) {
                    buttonMinus.style.display = 'flex';
                }
                filterCard.itemCount++;
                const itemCountInDom = document.querySelector('.counter');
                itemCountInDom.textContent = `${filterCard.itemCount}`;
                modalPriceTag.textContent = `${total}`;
                if (filterCard.itemCount > 1) {
                    totalPrice();


                }
            };
            const countDell = () => {
                filterCard.itemCount--;
                const itemCountInDom = document.querySelector('.counter');
                itemCountInDom.textContent = `${filterCard.itemCount}`;
                totalPrice();



                if (filterCard.itemCount === 0) {
                    cartDataArray.splice(cartDataArray.indexOf(filterCard), 1);
                    buttonMinus.style.display = 'none';



                }

            };



            buttonPlus.addEventListener('click', countAdd);
            buttonMinus.addEventListener('click', countDell);





        };
        const checkCard = document.querySelector('.item-in-cart');
        if (!checkCard) {
            const card = `
            <div class = "modal-body item-in-cart" id = "${id}">
                <div class="food-row">
                    <span class="food-name">${name}</span>
                    <strong class="food-price">${price}₽</strong>
                    <div class="food-counter">
            			<button class = "counter-button buttonM"> - </button>
            			<span class="counter">1</span>
            			<button class = "counter-button buttonP"> + </button>
                </div> 
            </div>`;

            cardBody.insertAdjacentHTML('afterend', card);



        }
        buttonAddToCart.style.color = 'red';
        const itemId = document.querySelector('.item-in-cart').id;
        const itemCount = document.querySelector('.counter').textContent;
        const itemName = document.querySelector('.food-name').textContent;
        const itemPrice = document.querySelector('.food-price').textContent;
        const itemSize = JSON.stringify(Number.parseFloat(sizeData)); //угар)



        buttonAddToCart.textContent = ' товар в корзине';
        // buttonAddToCart.removeEventListener('click', addToCart);



        //localStorage.setItem(' cartData', JSON.stringify(cartDataArray));

        const product = cartDataArray.find((productCheck) => {
            return productCheck.itemId === itemId;
        });

        if (product) {
            addCountIncard();


        } else if (!product) {
            cartDataArray.push({
                itemId,
                itemName,
                itemPrice,
                itemSize,
                itemCount: 1
            });

            modalPriceTag.insertAdjacentHTML('afterend', input);
            addCountIncard();

        }
    };


}


clearCart.addEventListener('click', (event) => {
    const body = document.querySelector('.food-row');
    body.textContent = "";
    cartDataArray = [];

    location.reload();

})

buttonPrimary.addEventListener("click", Checkout);
buttonAddToCart.addEventListener("click", addToCart);
firstButtonSlider.addEventListener("click", clickButton);
secondButtonSlider.addEventListener("click", clickButton);
document.addEventListener("click", SizeSelected);