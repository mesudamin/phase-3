const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "mesud",
  password: "123",
  database: "mesud",
});

connection.connect((err) => {
  if (err) {
    console.log("error on conecting  ", err);
  }
  console.log("connected sucesse fuly");
});

let create = `CREATE TABLE if not exists task (task_id int auto_increment, taskName VARCHAR(255) not null, PRIMARY KEY (task_id))`;
connection.query(create, (err) => {
  if (err) {
    console.log("error on table creating    ", err);
  }
  console.log("table created ");
});
let insert = "INSERT INTO task(taskName) VALUES(?)";

connection.query(insert, ["reading book"], (err, results) => {
  if (err) {
    console.log("error on inserting   ", err);
  }
  console.log("task inserted");
});

let select = "SELECT *FROM task ";

connection.query(select, (err, results) => {
  if (err) {
    console.log("error on SELECTING   ", err);
  }
  console.table(results);
});

let update = "UPDATE task SET taskName = ? WHERE task_id = ?";

connection.query(update, ["study", 1], (err, results) => {
  if (err) {
    console.log("error on updating   ", err);
  }
  console.table("updated");
});

let deleteS = "DELETE FROM task WHERE task_id = 5";
connection.query(deleteS, (err, results) => {
  if (err) {
    console.log("error on DELETING   ", err);
  }
  console.table("deleted");
});
