const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');

const buttonLogin = document.querySelector('.button-login');
const passFromInput = document.querySelector('#password');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

const cart = [];

let login = localStorage.getItem('userLogin');
let pass = localStorage.getItem('userPass');

const toggleModal = () => {
  modal.classList.toggle("is-open");
}

const toggleModalAuth = () => {
  modalAuth.classList.toggle('is-open');
}
const authorized = () => {
  userName.textContent = login;
  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "flex";
  cartButton.style.display = "flex";

  const logOut = () => {
    login = null;
    localStorage.removeItem('userLogin');
    localStorage.removeItem('userPass');
    buttonAuth.style.display = "";
    cartButton.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener('click', logOut);
    checkAuth();


  };

  buttonOut.addEventListener('click', logOut);

  console.log('авторизоан')
};


const notAuthorized = (event) => {
  const logIn = (event) => {
    event.preventDefault();
    login = loginInput.value;
    pass = passFromInput.value;
    localStorage.setItem('userLogin', login);
    localStorage.setItem('userPass', pass);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener("click", toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  };
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
  console.log(' логин не введен')

};

cartButton.addEventListener("click", toggleModal);
close.addEventListener('click', toggleModal);

//функцыя для проверки авторизацыи
const checkAuth = () => {
  if (login) {

    authorized();
  } else {
    notAuthorized();
  }
}
checkAuth();