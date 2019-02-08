var express = require('express');
var app = express();
var mysql = require('mysql');

app.use(function(request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdcompet'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('Connection à la base de donnée effectuée');
});

var sql = 'SELECT * FROM competition';

connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
});

app.get('/competitions', function(request, response){
    connection.query(sql, function (err, res) {
        if (err) throw err;
        response.end(JSON.stringify(res));
    });
});

app.listen(8090);