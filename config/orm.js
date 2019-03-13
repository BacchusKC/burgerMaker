var connection = require("./connection.js");

var orm = {
    all: function (res) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            res(result);
        });
    },
    create: function (burger_name, res) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log(burger_name);
        connection.query(queryString, burger_name, function (err, result) {
            if (err) throw err;
            res(result);
        });
    },
    update: function (id, res) {
        var queryString = "UPDATE burgers SET eaten = '1' WHERE id = ?;";
        connection.query(queryString, [id], function (err, results) {
            if (err) throw err;
            res(results);
        });
    }
};

module.exports = orm;