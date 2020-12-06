const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const Close = document.querySelector(".close");
const buttomAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const LoginForm = document.querySelector('.form-Main')
const cancelBat = document.querySelector('.cancelbtn');





let login = '';

const toggleModal = () => {
  LoginForm.classList.toggle("on-open");

}

const toggleModalAuth = () => {
  LoginForm.classList.add("on-open");



}

const authorized = () => {} // не написана
// console.log('Aвторизован');


// console.log('Не авторизован');


buttomAuth.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);
cartButton.addEventListener("click", toggleModal);
Close.addEventListener("click", toggleModal);

//logInForm.addEventListener('submit', logIn);