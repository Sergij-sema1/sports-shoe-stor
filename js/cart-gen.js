const cardRestaurants = document.querySelector('.cards-restaurants');
const DbUrl = 'http://localhost:8080/shop/brand';


const getData = async function (url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`ошибка по адресу :${url},
    ошибка по адресу :${response.status}`);
  }
  return response.json();
};


const createCardRestaurant = (brand) => { //создание карточки 
  const {
    description,
    id,
    img,
    name,
    price
  } = brand;



  const card = ` <a  href="brendscatalog.html " class="card " id="${id}" card-restaurant" >
              <img
                src = "${img}"
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
  cardRestaurants.insertAdjacentHTML('beforeend', card);


};
// createCardRestauran(); //вызов  функцыи создания карточки


// function createCardGoods() {
//   const card = document.createElement('div');
//   card.className = 'card';
//   card.insertAdjacentHTML = ('beforeend', ` <a  class="card card-restaurant">
//               <img
//                 src="img/brands_logo/adidas.jpg"
//                 alt="image"
//                 class="card-image"
//               />

//               <div class="card-text">
//                 <div class="card-heading">
//                   <h3 class="card-title">каталог adidas</h3>
//                   <span class="card-tag tag">есть</span>
//                 </div>

//                 <div class="card-info">
//                   <div class="rating">4.5</div>
//                   <div class="price">От 900 ₽</div>
//                   <div class="category">спорт</div>
//                 </div>
//               </div>
//             </a>`);

// }

const openGoods = (event) => {
  // почучил идентификатор карточки бредна для передачи на вторую страницу 
  const target = event.target;
  const brand = target.closest('.card').id;
  document.cookie = `${brand}`;
};

getData(DbUrl).then((item) => { //обращение к базе типа джейсон и возврати данных 
  // Dburl в верху
  //через промис с перебором в цыкле
  item.forEach(createCardRestaurant);
});
cardRestaurants.addEventListener('click', openGoods);