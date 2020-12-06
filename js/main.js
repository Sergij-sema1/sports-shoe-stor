const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttomAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const LoginForm = document.querySelector('.form-Main')

let login = '';

const toggleModal = () => {
  console.log('экнопка корзина нажата');
  modal.classList.toggle("is-open");

}

const toggleModalAuth = () => {
  console.log('кнопка воити нажата');

  modalAuth.classList.toggle('is-open');





}

buttomAuth.addEventListener('click', toggleModalAuth);
cartButton.addEventListener("click", toggleModal);
closeAuth.addEventListener("click", toggleModalAuth);
close.addEventListener('click', toggleModal);

//logInForm.addEventListener('submit', logIn);