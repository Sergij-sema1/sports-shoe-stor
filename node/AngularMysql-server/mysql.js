const mysql = require("mysql2");
const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "shop",
    password: "1988Sema"
});
sql.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('соединение установленно');
    }
});
sql.query("SELECT * FROM shop.brand", (err, result) => {
    console.log(result);
});

sql.end((err) => {
    if (err) {
        return console.log(err.message);
    } else {
        return console.log('эсоединение закрыто');
    }

})