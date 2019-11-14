// this imports orm.js into my burger.js and calls my orm functions.
var orm = require("../config/orm.js");

var burger = {
    // this will display all of the burgers in the burgers_db.
    findAll: function(cb) {
        orm.findAll("burgers", function(res) {
            cb(res);
        });
    },
    
    // this adds new burgers to the burgers_db and makes true the status of devoured burgers.
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // this deletes burgers from the burgers_db.
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// this is important. none of the code works without it.
module.exports = burger;