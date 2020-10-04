const cardRestaurants = document.querySelector('.cards-restaurants');


console.log(cardRestaurants);

function createCardRestauran() {

  const card = ` <a  class="card card-restaurant">
              <img
                src="img/brands_logo/adidas.jpg"
                alt="image"
                class="card-image"
              />

              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">каталог adidas</h3>
                  <span class="card-tag tag">есть</span>
                </div>

                <div class="card-info">
                  <div class="rating">4.5</div>
                  <div class="price">От 900 ₽</div>
                  <div class="category">спорт</div>
                </div>
              </div>
            </a>`;
  cardRestaurants.insertAdjacentHTML('beforeend', card);

}
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();
createCardRestauran();

function createCardGoods() {
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML = ('beforeend', ` <a  class="card card-restaurant">
              <img
                src="img/brands_logo/adidas.jpg"
                alt="image"
                class="card-image"
              />

              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">каталог adidas</h3>
                  <span class="card-tag tag">есть</span>
                </div>

                <div class="card-info">
                  <div class="rating">4.5</div>
                  <div class="price">От 900 ₽</div>
                  <div class="category">спорт</div>
                </div>
              </div>
            </a>`);
  //console.log(card);
}

function openGoods(event) {
  const target = event.target;

  const restaurant = target.closest('.card-restaurant');
  console.log(restaurant);
  createCardGoods();
}
cardRestaurants.addEventListener('click', openGoods);