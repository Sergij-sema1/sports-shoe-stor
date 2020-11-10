//функцыя получает данные из псевдобазы,генерирует карточки динамически на страницу по ид переданому coockies
const subPageGeneration = () => {
  const idFromCookie = document.cookie;
  console.log(`id товара${idFromCookie}`)

  //адрес базы данных откуда подгружаются все карточки
  const url = 'http://localhost:8080/model';

  //функцыя для обращения к базе
  const DataFormeBace = async (url) => {

    const response = await fetch(url);
    return await response.json();

  }
  //функцыя которая получает дание и генерит из них карточки
  const cartGen = (list) => {
    const {
      id,
      brandsId,
      image,
      name,
      description,
      description_second,
      price
    } = list;

    const card = ` <a  href="brendscatalog.html " class="card " id="${id}" card-restaurant" >
              <img
                src = "${image}"
                alt="image"
                class="card-image"
              />
             
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${description}</h3>
                </div>
                <div class="card-info">
                  <div class="price">${price}</div>
                  
                </div>
              </div>
            </a>`;

    const subCardRestaurant = document.querySelector('.cards-restaurants');
    subCardRestaurant.insertAdjacentHTML('beforeend', card);



  }
  //DataFormeBace возвращает обекти с id  который передан в cockis
  // с перебором в цыкле потом вызов функции для генерацыи карточек
  // с передачей ей даных
  DataFormeBace(url, idFromCookie).then((data) => {

    const list = data.filter(currentValue => {
      return currentValue.brandsId == `${idFromCookie}`;
    });
    list.forEach(cartGen);
  });
};

subPageGeneration();