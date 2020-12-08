window.onload = () => {
    const userName = document.querySelector('.user-name');
    let login = localStorage.getItem('userLogin');
    let pass = localStorage.getItem('userPass');

    console.log(login)



    const authorized = () => {
        userName.textContent = login;
        buttonAuth.style.display = "none";
        userName.style.display = "inline";
        buttonOut.style.display = "block";

        const logOut = () => {
            login = null;
            pass = null;
            localStorage.removeItem('userLogin');
            localStorage.removeItem('userPass');
            buttonAuth.style.display = "";
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


    };



    const checkAuth = () => {
        if (login) {

            authorized();
        } else {
            notAuthorized();
        }
    }
    checkAuth();




}