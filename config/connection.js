const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "	rtmgtiadzdk21l7i",
        password: "leekqrwaogmjr6a6",
        database: "igainlbhp3fjrx5n"
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