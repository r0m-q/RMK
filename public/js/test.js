const mysql = require("mysql");
var connection;
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rmkdb',
  password: 'RMK_passw0rd1'
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
 connection.end(function(err) {
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
  });