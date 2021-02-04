window.onload = () => {
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
    const footer = document.querySelector('.modalfooter');
    const ProductImg = new Array();
    let sliderCount = 0;
    console.log(dataFromCookie)


    const input = `<input type="text" placeholder="Введите имя,телефон для доставки" 
class="brandInput" id="inputSring">`;



    // после нажатия оформить будет брать все данных записывать их в базу и через бота в телеграмме будет деать отчет продавцу)
    const Checkout = (event) => {


        const buyerContact = document.querySelector('#inputSring').value;
        const itemName = document.querySelector('.food-name').textContent;
        const itemCount = document.querySelector('.counter').textContent;
        const itemPrice = document.querySelector('.food-price').textContent;
        const itemTotalPrice = document.querySelector('.modal-pricetag').textContent;
        const timeBy = new Date();
        const date = timeBy.toLocaleDateString();


        const deliveryData = `
${buyerContact},${itemName},кол:${itemCount},цена:${itemPrice},об.цена:${itemTotalPrice},${date}`;



        //запись в бд отчета по заказу
        const addOrderToDb = async () => {
            urlAddOrderToDb = 'http://localhost:8080/shop/order';
            let response = await fetch(urlAddOrderToDb, {
                method: 'POST',
                headers: {
                    'Content-Type': ' application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    buyerData: `${deliveryData}`
                })
            });
            if (response.ok) {
                const countStr = document.querySelector('.food-counter');
                const PriseStr = document.querySelector('.food-price');
                countStr.style.display = "none";
                footer.style.display = "none";
                PriseStr.style.display = "none";

                const Mesage = 'заказ оформлен, с вами свяжется менеджер спасибо!';

                const infoStr = document.querySelector('.food-name');

                infoStr.textContent = Mesage;


                return console.log(`add ok :${response.status}`);

            } else {
                return console.log(`add err :${response.status}`);
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


        let img;


        FotoUrl = "http://localhost:8080/shop/productFoto/names/final";

        const FotoForItem = async (url) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({

                    id: dataFromCookie
                })
            });
            return response.json();
        };
        FotoForItem(FotoUrl).then((item) => {
            item.forEach((item) => {
                ProductImg.push(item);

            })
        }).then(() => {

            console.log(ProductImg[0])
            img = ProductImg[0].nameImg;

            localStorage.setItem("item", JSON.stringify(ProductList));
            const {
                id,
                brandid,
                name,
                description,
                description_second,
                price,
            } = ProductList;

            const cardItem = `<img
     src = "/img/brands_shouse_foto/${img}"
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
        })

    };

    //функция после вызова обрабатывает нажатие нажатых клавиш слайдера

    const clickButtonRight = () => {

        const btnRight = document.querySelector('.btn2');

        if (ProductImg.length > sliderCount) {

            const imgItem = ProductImg[sliderCount].nameImg;
            imgUrl = `/img/brands_shouse_foto/${imgItem}`;
            const SliderImg = document.querySelector('.mainImg');
            SliderImg.src = imgUrl;
            sliderCount++;



        } else if (ProductImg.length === sliderCount) {
            sliderCount = 0;




        }

    }

    const clickButtonLeft = () => {

        if (sliderCount > 0) {
            sliderCount--;

            const imgItem = ProductImg[sliderCount].nameImg;
            imgUrl = `/img/brands_shouse_foto/${imgItem}`;
            const SliderImg = document.querySelector('.mainImg');
            SliderImg.src = imgUrl;


        } else if (sliderCount == 0) {
            sliderCount = ProductImg.length;

        }



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


            const addCountIncard = () => {
                const buttonPlus = document.querySelector('.buttonP');
                const buttonMinus = document.querySelector('.buttonM');
                const total = price;
                const filterCard = cartDataArray.find((productCheck) => {
                    return productCheck.itemId === itemId;
                });
                modalPriceTag.textContent = `${price}₽`;
                //перезаписывает конечную цену в зависимости от количества
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
            			< button class = "counter-button buttonP" > + < /button>
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
    firstButtonSlider.addEventListener("click", clickButtonLeft);
    secondButtonSlider.addEventListener("click", clickButtonRight);
    document.addEventListener("click", SizeSelected);
}