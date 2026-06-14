let mysql = require("mysql2");
let express = require("express");
let app = express();

app.use(express.json());
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

app.get("/create", (req, res) => {
  let name = `
    CREATE TABLE IF NOT EXISTS customers (
    customer_id int auto_increment,
    name VARCHAR(255)  not null,
    PRIMARY KEY (customer_id)
    )
  `;

  let address = `CREATE TABLE IF NOT EXISTS address(
address_id int auto_increment,
customer_id int not null,
address VARCHAR(255)  not null,
 PRIMARY KEY (address_id),
 FOREIGN  KEY (customer_id) REFERENCES customers (customer_id)

) `;

  let company = `CREATE TABLE IF NOT EXISTS company(
company_id int auto_increment,
customer_id int not null,
company VARCHAR(255)  not null,
 PRIMARY KEY (company_id),
 FOREIGN  KEY (customer_id) REFERENCES customers (customer_id)

) `;

  connection.query(name, (queryErr, results) => {
    if (queryErr) {
      console.error("Error creating table:", queryErr.message);
    }
  });

  connection.query(address, (queryErr, results) => {
    if (queryErr) {
      console.error("Error creating table:", queryErr.message);
    }
  });

  connection.query(company, (queryErr, results) => {
    if (queryErr) {
      console.error("Error creating table:", queryErr.message);
    }
  });
  console.log("table is created");
  res.send("table is created");
});
app.get("/getinfo", (req, res) => {
  let info =
    "SELECT * FROM customers JOIN address JOIN company on customers.customer_id=address.customer_id AND customers.customer_id=company.customer_id";
  connection.query(info, (err, results, fields) => {
    if (err) {
      console.log("error duringselection", err);
    }
    res.send(results);
  });
});

app.patch("/update", (req, res) => {
  const { newname, id } = req.body;

  let updatename = `UPDATE customers SET name = '${newname}' WHERE customer_id = '${id}'`;
  connection.query(updatename, (err, results) => {
    if (err) {
      console.log("error during update", err);
    }
    res.send(results);
  });
});

app.get("/", (req, res) => {
  res.send("mysql data base learning pra");
});
app.post("/insert", (req, res) => {
  console.table(req.body);

  const { name, address, company } = req.body;

  let insertName = "INSERT INTO customers(name) VALUES (?)";
  let insertAddress = "INSERT INTO address(customer_id,address) VALUES (?,?)";
  let insertCompany = "INSERT INTO company(customer_id,company) VALUES (?,?)";

  connection.query(insertName, [name], (queryErr, results, fields) => {
    if (queryErr) {
      console.error("Error creating table:", queryErr.message);
    }
    console.table(results);
    const id = results.insertId;
    connection.query(
      insertAddress,
      [id, address],
      (queryErr, results, fields) => {
        if (queryErr) {
          console.error("Error creating table:", queryErr.message);
        }
      },
    );

    connection.query(
      insertCompany,
      [id, company],
      (queryErr, results, fields) => {
        if (queryErr) {
          console.error("Error creating table:", queryErr.message);
        }
      },
    );
  });
});

app.listen(2026, () => {
  console.log("server is running on port 2026");
});
