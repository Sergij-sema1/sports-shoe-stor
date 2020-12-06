const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const Close = document.querySelector(".close");
const buttomAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const aytoriz = document.querySelector('.formMain')





let login = '';

const toggleModal = () => {

}

const toggleModalAuth = (event) => {
  let data = event.target;
  let parent = data.closest(".");




}

const authorized = () => {} // не написана
// console.log('Aвторизован');


// console.log('Не авторизован');


buttomAuth.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);
cartButton.addEventListener("click", toggleModal);
Close.addEventListener("click", toggleModal);
//logInForm.addEventListener('submit', logIn);