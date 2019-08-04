var mysql = require('mysql');

var PORT = process.env.PORT || 3306;

var connection = mysql.createConnection({
    host: "35.192.16.53",
    port: 3306,
    user: "sahra",
    password: "Mishmish0",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    };
    console.log("Connected as Id: " + connection.threadId);
});

module.exports = connection;