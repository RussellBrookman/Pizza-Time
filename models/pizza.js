var orm = require("../config/orm.js");

// create the pizza as an object
var pizza = {
  // all, create, and update comes from orm
  all: function(cb) {
    orm.all("pizzas", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create('pizzas', cols, vals,
    function(res) {
        cb(res);
      });
    },
  update: function(objColVals, condition, cb) {
    orm.update('pizzas', objColVals, condition, 
    function(res) {
      cb(res);
    });
  }
};

module.exports = pizza;
