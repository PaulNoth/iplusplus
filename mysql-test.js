var mysql = require('mysql');

var connection = mysql.createConnection({host: 'localhost', port: '3306', user: 'root', password: 'KetNudFaf', database: "test"});

connection.connect();

connection.query('select * from new_table', function (err, rows, fields) {
    if(err)
    {
        throw err;
    }
    console.log(rows[0].num);
});

connection.end();
