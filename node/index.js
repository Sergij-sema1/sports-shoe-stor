// const getConectionToMySql = () => {
//     //создание подключения
//     console.log('create conection to database shop');
//     const mysql = require('mysql2');
//     const conection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         database: "shop",
//         password: "1988Sema1"
//     });
//     // установка подключения с помощу метода  connect 
//     conection.connect((err) => {
//         if (err) {
//             console.log(`ошибка${err.message}`);
//         } else {
//             return console.log("Подключение к серверу MySQL успешно установлено");
//         }

//     })
//     //Для выполнения запросов у объекта подключения применяется метод query()

//     conection.query(`
//     select * from shop.model as m
//     join shop.brand as b
//     on m.brandid=shop.b.id  ; `,
//         (err, results, fields) => {
//             let data = results;
//             console.log(data);
//         }
//     );

//     //Закрытие подключения
//     conection.end((err) => {

//         if (err) {
//             return console.log(err.message);
//         } else {
//             console.log(`соединение закрыто`);
//         }
//     });
//     //Если же нам надо немедленно закрыть подключение, не дожидаясь 
//     // conection.destroy():





// };


// getConectionToMySql();


// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1988Sema1"
// });

// connection.query("DROP DATABASE usersdb2",
//     function (err, results) {
//         if (err) console.log(err);
//         else console.log("База данных создана");
//     });

// connection.end();