const dataFromCookie = document.cookie;
const DbUrl = "http://localhost:8080/shop/model";
const sliderImg = document.querySelector(".mainImg");
const SliderList = document.querySelector(".listImg");
const firstButtonSlider = document.querySelector(".btn1");
const secondButtonSlider = document.querySelector(".btn2");
const mainSlider = document.querySelector(".MainSlider");
const description = document.querySelector('.description');

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
const ItemSizeSelected = (event) => {
    const target = event.target;

    if (target.nodeName == "LI") {
        target.classList.toggle("selected");
        console.log(target.id);
    } else {
        return;
    }
};
//функцыя создает структуру страницы (картинки и размеры с данных полученных от бд)
const createItem = (ProductList) => {
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
            <ul class="listImg">
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




    mainSlider.insertAdjacentHTML('beforeend', cardItem);

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

firstButtonSlider.addEventListener("click", clickButton);
secondButtonSlider.addEventListener("click", clickButton);
//SliderList.addEventListener('click', ItemSizeSelected);