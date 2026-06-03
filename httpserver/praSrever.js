// const http = require("http");
// const fs = require("fs");

// const path = require("path");
// practice on 2.4

// const server = http.createServer((req, res) => {
//   console.log("receved  request ");

//   res.end("hollo  their");
// });

// server.listen(3000, () => {
//   console.log("server is  running on port 3000");
// });
// practice on 2.5
// const server = http.createServer((req, res) => {
//   console.log("server start");
//   if (req.url === "/abebe") {
//     console.log("abe  boss");

//     let filePath = path.join(__dirname, "index.html");
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error("Error reading file:", err);
//         return;
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("server is  running on port 3000");
// });
// practice on 2.6

// const url = require("url");
// const mimetypelookup = require("mime-types").lookup;
// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   let filePath = parsedUrl.path;

//   if (filePath == "/") {
//     filePath = "/index.html";
//   }

//   var requestedFile = __dirname + "/apple/" + filePath;
//   fs.readFile(requestedFile, (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     } else {
//       let mime = mimetypelookup(filePath);
//       res.writeHead(200, {
//         "Content-Type": mime,
//       });
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log("server is  running on port 3000");
// });

// // practice on 2.7
// const express = require("express");
// let app = express();

// app.use(express.static("apple"));
// app.listen(3000, () => {
//   console.log("running on port 3000");
// });
