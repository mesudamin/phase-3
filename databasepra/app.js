let mysql = require("mysql2");
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("mysql data base learning pra");
});

app.listen(2026, () => {
  console.log("server is running on port 2026");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "mesud",
  password: "123",
  database: "mesud",
});
let connecter = connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Successfully connected to MySQL!");
});
