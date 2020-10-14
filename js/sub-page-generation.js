const idFromCookie = document.cookie;
const url = '/db/brends_catalog/allshose.json';

const getData = async function (url, id) {
    console.log(`brend id : ${id}`)
    const response = await fetch(url);
    return await response.json();

}


getData(url, idFromCookie).then(data => {

    const result = data.filter((list) => {

        list == `${idFromCookie}`;

    })
    console.log(result);



})