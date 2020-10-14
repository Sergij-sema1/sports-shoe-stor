const idFromCookie = document.cookie;
const url = '/db/brends_catalog/allshose.json';

const getData = async function (url, id) {
    console.log(`brend id : ${id}`)
    const response = await fetch(url);
    return response;

}


getData(url, idFromCookie).then((data) => {
    console.log(data.json());

})