const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestaotattoo'
});

db.connect(function(err){
    if(err) throw err;
    console.log('Database conected')
});


module.exports = db;