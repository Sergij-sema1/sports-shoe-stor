const dataFromCookie = document.cookie;
console.log(dataFromCookie);
const sliderImg = document.querySelector('.mainImg');
const SliderList = document.querySelector('.listImg');
const firstButtonSlider = document.querySelector('.btn1');
const secondButtonSlider = document.querySelector('.btn2');

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