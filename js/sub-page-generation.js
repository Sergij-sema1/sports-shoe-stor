const idFromCookie = document.cookie;

//адрес базы данных откуда подгружаются все карточки
const url = '/db/brends_catalog/allshose.json';

//функцыя для обращения к базе
const DataFormeBace = async function (url, id) {

    const response = await fetch(url);
    return await response.json();

}
//функцыя которая получает дание и генерит из них карточки
function cartGen(list) {
    const {
        id,
        brandsId,
        image,
        name,
        description,
        description_second,
        price
    } = list;




}

//getData возвращает обекти с id  который передан в cockis
// с перебором в цыкле потом вызов функции для генерацыи карточек
// с передачей ей даных
DataFormeBace(url, idFromCookie).then((data) => {

    const list = data.filter(function (currentValue) {

        return currentValue.brandsId == `${idFromCookie}`;

    });

})