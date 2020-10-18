const slider = () => {
    const images = document.querySelector('.item2');

    //цыкл генирацыи  картинок и класса им на страницу

    for (let i = 0; i < 15; i++) {
        let img = document.createElement('img');

        img.setAttribute('src', `img/slider/${i}.jpg`);

        img.setAttribute('alt', `slider-images`);
        document.body.querySelector('.item2').appendChild(img);
    }

    let divImages = document.querySelectorAll('.item2 img');
    let current = 0;
    // функцыя для изменения класса под роботу css через стили меняем кртинки
    const slidIcon = () => {
        for (let i = 0; i < divImages.length; i++) {
            divImages[i].classList.add('x');
        }

        divImages[current].classList.remove('x');
        current++;
        if (current == divImages.length) {
            current = 0;
        }

    }
    // вызов функцый каждые 3 секунды для изменения картинки
    slidIcon();
    setInterval(() => {
        slidIcon();
    }, 7000);
};

slider();