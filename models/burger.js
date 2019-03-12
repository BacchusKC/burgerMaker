var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all(function(results) {
      cb(results);
    });
  },
  create: function(burger_name, cb) {
    orm.create(burger_name, function(results) {
      cb(results);
    });
  },
  update: function(id, cb) {
    orm.update(id, function(results) {
      cb(results);
    });
  }
};

module.exports = burger;
