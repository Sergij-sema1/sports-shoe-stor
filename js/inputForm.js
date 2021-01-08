window.onload = () => {
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

        const paretFotoBrandUrl = '/img/brands_shouse_foto/';
        const paretFotoModelUrl = '/img/brands_shouse_foto/';

        let db = new Array();


        //  порверка введенных данных в ворме








        //получение списка о вкладке бренды
        const brandSelectParametrs = async () => {
            const response = await fetch('http://localhost:8080/shop/brand');
            if (response.ok) {
                const json = await response.json();
                json.forEach(item => {
                    const option = document.createElement('option');
                    option.setAttribute('value', item.id);
                    option.text = item.name;
                    brand.appendChild(option);

                });
            }
        }
        brandSelectParametrs();

        const saveData = (event) => {
            event.preventDefault();
            buttonSave.preventDefault;
            const brandIdValue = brand.options[brand.selectedIndex].value;
            const brandValueText = brand.options[brand.selectedIndex].text;
            const descriptionValue = description.value;
            const nameValue = name.value;

            const priceValue = price.value.replace(',', '.');

            const inputImg = document.querySelector('#img-Shose').value;



            const imgUrl = inputImg.split(/\\/); // ищет \
            const imgUrlVulue = imgUrl.pop(); // возвращает последний елемен из маслива (название картинки)

            //проверка содержымого

            if (descriptionValue == "") {
                description.classList.add('error');
                console.log("не введено описание");
                return;
            }
            if (priceValue == "") {

                price.classList.add('error');

                console.log("не введена цена");
                return;
            }
            if (nameValue == "") {
                name.classList.add('error');
                console.log("не введенно название");
                return;
            }

            if (img.value == "") {
                img.classList.add("error");
                console.log("не выбрана картинка");
                return;
            }
            //функцыя добавляет картинки в базу данных пивязывая их к id product
            const addProductImgById = (jsonData) => {
                const data = jsonData.values;

                console.log(data)
            };
            //получение последнего id записаного в базу товара
            const getLastProductId = () => {
                const ProductID = async () => {
                    const url = 'http://localhost:8080/shop/lastProductId';
                    const response = await fetch(url);
                    const jsonData = response.json();
                    return jsonData;
                }
                ProductID().then((jsonData) => {
                    jsonData.forEach(addProductImgById);
                });
            }
            //запись в бузу

            const getData = async () => {
                const url = 'http://localhost:8080/shop/model';
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        name: nameValue,
                        description: descriptionValue,
                        price: priceValue,
                        brandid: brandIdValue,
                        img: imgUrlVulue,

                    })
                });
                getLastProductId();

                return console.log(`add item to db ok `);


            }
            getData();





        };

        const deleteData = (event) => {

            event.preventDefault();
            deleteData.preventDefault;

            const inputImg = document.querySelector('#img-Shose').value;
            const imgUrl = inputImg.split(/\\/); // ищет \
            const imgUrlVulue = imgUrl.pop(); // возвращает последний елемен из маслива (название картинки)

        }
        const addProductFoto = (event) => {
            const addData = async (nameImg, productId) => {


                const url = 'http://localhost:8080/shop/productFoto';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        nameImg,
                        productId
                    })
                });
                event.preventDefault();
                return console.log(`add all Pictures to db ok `);

            }

            const func = (name, productId) => {
                db.push(name);

                addData(name, productId);


            };
            for (var i = 0; i <= img.files.length; ++i) {
                let x = img.files[i];


                const productId = '';
                const name = x.name;
                func(name, productId);
            }



            // event.preventDefault();
        }


        //обработчик собитий 
        buttonSave.addEventListener('click', saveData);
        buttonDelete.addEventListener('click', deleteData);
        buttonEdit.addEventListener('click', addProductFoto);
        //  buttonDelete.addEventListener('click', DeleteData);

        //обработчики проверок ввода данных//------------------


    };

    inputFormData();

}