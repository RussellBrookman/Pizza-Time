var express = require("express");
var router = express.Router();
var pizza = require("../models/pizza.js");

router.get('/', function(req, res) {
  // calling pizza.all, express callback response
  pizza.all(function(data) {
    // pizzas: data is now an object
    var hbsObject = {
      pizzas: data
    };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/pizzas", function(req, res) {
  pizza.create([
    "pizza_name"
  ], [
    req.body.pizza_name
  ], function(data) {
    res.redirect("/");
  })
});

// put route -> back to index, pizzas is the name of an SQL table
router.put("/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  pizza.update({
    devoured: true
  }, 
    condition, function(data) {
    res.redirect("/");
    }
  );
});

module.exports = router;
