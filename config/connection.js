const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "3317",
        database: "burgers_db"
    });
};

connection.connect(function(error) {
    if (error) {
        console.error("there was an error connecting: " + error.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});

module.exports = connection;