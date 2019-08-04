var connection = require('./connection.js');

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burger_name) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('?', false)";
        connection.query(queryString, [burger_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(burger_name) {
        var queryString = "UPDATE burgers SET burger_name = ?";
        connection.query(queryString, [burger_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;