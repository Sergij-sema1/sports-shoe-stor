console.log(`cart-js -conected : начинаем создавать карточки на js`);


const cardRestaurants = document.querySelector('.card-restaurant');

function createCardRestauran() {

    const card = `
    <a href="#" class="card card-restaurant">
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
            </a>
    `;
    cardRestaurants.insertAdjacentHTML('beforeend', cards);
}
createCardRestauran();