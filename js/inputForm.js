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


        //получение списка о вкладке бренды
        const brandSelectParametrs = async () => {
            const response = await fetch('http://localhost:8080/brand');
            if (response.ok) {
                let json = await response.json();
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
            const priceValue = price.value;
            const imgValue = document.querySelector('#img-Shose').value;



            //запись в бузу

            const getData = async () => {
                let response = await fetch('http://localhost:8080/shop', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        name: nameValue,
                        description: descriptionValue,
                        price: priceValue,
                        brandid: brandIdValue

                    })
                });
                return response;

            }
            getData();




        };
        //обработчик собитий кнопока  
        buttonSave.addEventListener('click', saveData);

        // buttonEdit.addEventListener('click', EditData);
        //  buttonDelete.addEventListener('click', DeleteData);


    };

    inputFormData();

}