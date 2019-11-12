const connection = require("../config/connection.js");

function sqlHelper(num) {
    var array = [];
    for(var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

function sqlObj(object)