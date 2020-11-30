const dataFromCookie = document.cookie;
const DbUrl = 'http://localhost:8080/shop/brand';
const sliderImg = document.querySelector('.mainImg');
const SliderList = document.querySelector('.listImg');
const firstButtonSlider = document.querySelector('.btn1');
const secondButtonSlider = document.querySelector('.btn2');


//функцыя делает запрос к базе для получения данных 
const GetdadaItem = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`ошибка по адресу :${url},
    ошибка по адресу :${response.status}`);
    }
    return response.json();
};





//выбераем размер и он меняет цвет для визуальной фиксацыи
const ItemSizeSelected = (event) => {

    const target = event.target;

    if (target.nodeName == "LI") {
        target.classList.toggle('selected');
        console.log(target.id)

    } else {
        return;
    }


};
//функция после вызова обрабатывает нажатие нажатых клавиш слайдера
const clickButton = (item) => {
    console.log(item.srcElement)

};



firstButtonSlider.addEventListener('click', clickButton);
secondButtonSlider.addEventListener('click', clickButton);
SliderList.addEventListener('click', ItemSizeSelected);