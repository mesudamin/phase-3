const mysql = require("mysql2/promise");
let connection = mysql.createConnection({
  host: "localhost",
  user: "mesud",
  password: "123",
  database: "mesud",
});

// let create = `CREATE TABLE if not exists task (task_id int auto_increment, taskName VARCHAR(255) not null, PRIMARY KEY (task_id))`;
// connection.query(create, (err) => {
//   if (err) {
//     console.log("error on table creating    ", err);
//     return;
//   }
//   console.log("table created ");
// });
// let insert = "INSERT INTO task(taskName) VALUES(?)";

// connection.query(insert, ["reading book"], (err, results) => {
//   if (err) {
//     console.log("error on inserting   ", err);
//     return;
//   }
//   console.log("task inserted");
// });

// let select = "SELECT *FROM task ";

// connection.query(select, (err, results) => {
//   if (err) {
//     console.log("error on SELECTING   ", err);
//     return;
//   }
//   console.table(results);
// });

//

// connection.end((err) => {
//   if (err) {
//     console.error("Error during disconnection:", err.message);
//     return;
//   } else {
//     console.log("Connection closed cleanly.");
//   }
// });
//////////////////////////
/////////////////////////////////////////////////////////////////
connection.connect((err) => {
  if (err) {
    console.log("error on conecting  ", err);
    return;
  }
  console.log("connected sucesse fuly");

  let createTableUser = `CREATE TABLE if not exists users (users_id int auto_increment, users_name VARCHAR(255) not null, PRIMARY KEY (users_id))`;
  connection.query(createTableUser, (err) => {
    if (err) {
      console.log("error on table creating    ", err);
      return;
    }
    console.log(" user table created ");
    let createTableTask = `CREATE TABLE if not exists tasks (tasks_id int auto_increment,title VARCHAR(255) not null,done BOOLEAN NOT NULL DEFAULT FALSE,users_id int not null, PRIMARY KEY (tasks_id), FOREIGN  KEY (users_id) REFERENCES  users (users_id)
)`;
    connection.query(createTableTask, (err) => {
      if (err) {
        console.log("error on table creating    ", err);
        return;
      }
      console.log(" tasks table created ");
      let inserted = "INSERT INTO users (users_name) VALUES ('lale')";
      connection.query(inserted, (err, results) => {
        if (err) {
          console.log("error on inserting user   ", err);
          return;
        }

        console.log("user  inserted");
        let id = results.insertId;
        let inserts = "INSERT INTO tasks (title, users_id) VALUES (?, ?)";

        connection.query(inserts, ["watching video", id], (err, results) => {
          if (err) {
            console.log("error on inserting  tasks   ", err);
            return;
          }
          let ids = results.insertId;
          console.log("task inserted");

          let select = "SELECT * FROM tasks WHERE users_id=? ";

          connection.query(select, [id], (err, results) => {
            if (err) {
              console.log("error on SELECTING   ", err);
              return;
            }
            console.table(results);
            let update = "UPDATE tasks SET title  = ? WHERE tasks_id = ?";

            connection.query(update, ["study", ids], (err, results) => {
              if (err) {
                console.log("error on updating   ", err);
                return;
              }
              console.log("updated");
              let deleteS = "DELETE FROM tasks WHERE tasks_id = ?";
              connection.query(deleteS, [ids], (err, results) => {
                if (err) {
                  console.log("error on DELETING   ", err);
                  return;
                }
                console.log("deleted");
                connection.end((err) => {
                  if (err) {
                    console.error("Error during disconnection:", err.message);
                    return;
                  } else {
                    console.log("Connection closed cleanly.");
                  }
                });
              });
            });
          });
        });
      });
    });
  });
});
