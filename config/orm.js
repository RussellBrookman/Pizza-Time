var connection = require("./connection.js");

// makes a little sql syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// this also makes a little piece of sql
function objToSql(ob) {
  // column1=value, column2=value2
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}
// the orm object will make the actual SQL query.
var orm = {
  // this will grab the whole table
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals = array of values to be saved to cols
  // cols are columns we to insert the vals into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals is the cols and vals to be updated
  // ex, objColVals:    {name: whatever, doingYadaYadaYada: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
