const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


//day1 1 //---------------------------------------

const buttomAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');

let login = '';

modalAuth.classList.add('hello');





function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

function authorized() {
  console.log('Aвторизован');
}

function notAuthorized() {


  console.log('Не авторизован');

  function logIn(event) {
    console.log(event);
    event.preventDefault();
    login = loginInput.value;
    toggleModalAuth();


  }
  buttomAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

if (login) {
  authorized();
} else if (!login) {
  notAuthorized();
}