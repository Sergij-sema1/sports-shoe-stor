//функцыя получает данные из псевдобазы,генерирует карточки динамически на страницу по ид переданому coockies
const subPageGeneration = () => {
  const idFromCookie = document.cookie;
  console.log(`id товара${idFromCookie}`)

  //адрес базы данных откуда подгружаются все карточки
  const url = 'http://localhost:8080/shop/model';

  //функцыя для обращения к базе
  const DataFormeBace = async (url) => {

    const response = await fetch(url);
    return await response.json();

  }
  //функцыя которая получает дание и генерит из них карточки
  const cartGen = (model) => {
    const paretFotoBrandUrl = '/img/brands_shouse_foto/';
    const paretFotoModelUrl = '/img/brands_shouse_foto';
    //console.log(list);
    const {

      id,
      brandid,
      img,
      name,
      description,
      description_second,
      price
    } = model;


    const card = ` <a  href="brendscatalog.html " class="card " id="${id}" card-restaurant" >
              <img
                src = "${paretFotoModelUrl}/${img}"
                alt="image"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                </div>
                <div class="card-info">
                  <div class="price">${price} рублей</div>
                  
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
    const list = data.filter(item => {
      return item.brandid == `${idFromCookie}`;
    })
    console.log(list);
    list.forEach(cartGen);
  });

};

subPageGeneration();