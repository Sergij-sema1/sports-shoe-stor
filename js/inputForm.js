const inputFormData = () => {
    const buttonSave = document.querySelector('#save-btn');
    const buttonEdit = document.querySelector('#edit-btn');
    const buttonDelete = document.querySelector('#delete-btn');

    const brand = document.querySelector('#optionValue');
    const description = document.querySelector('#inputDescripton');
    const name = document.querySelector('#name-brand');
    const count = document.querySelector('#countModel');
    const img = document.querySelector('#img-Shose');
    const price = document.querySelector('#price');


    const saveData = (event) => {

        const valueBrand = brand.options[brand.selectedIndex];
        return console.log(valueBrand.value);


    };
    //обработчик собитий кнопока  
    buttonSave.addEventListener('click', saveData);
    // buttonEdit.addEventListener('click', EditData);
    //  buttonDelete.addEventListener('click', DeleteData);


};
inputFormData();