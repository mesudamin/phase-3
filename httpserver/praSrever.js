const http = require("http");
const fs = require("fs");

const path = require("path");
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

const url = require("url");
const mimetypelookup = require("mime-types").lookup;
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let filePath = parsedUrl.path;

  if (filePath == "/") {
    filePath = "/index.html";
  }

  var requestedFile = __dirname + "/apple/" + filePath;
  fs.readFile(requestedFile, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    } else {
      let mime = mimetypelookup(filePath);
      res.writeHead(200, {
        "Content-Type": mime,
      });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("server is  running on port 3000");
});

// // Create the Server Object
// const server = http.createServer(function (req, res) {
//   // console.log(req);
//   const parsedUrl = url.parse(req.url, true);
//   // console.log(parsedUrl);

//   // // Requested file name
//   let filePath = parsedUrl.path;
//   // console.log(filePath);
//   if (filePath == "/") {
//     filePath = "/index.html";
//   }
//   var requestedFile = __dirname + "/apple/" + filePath;
//   // console.log(requestedFile);
//   const readFile = fs.readFile(requestedFile, function (err, content) {
//     if (err) {
//       res.writeHead(404);
//       res.end();
//     } else {
//       let mime = mimetypelookup(filePath);
//       res.writeHead(200, { "content-type": mime });
//       res.end(content);
//     }
//   });
// });

// // Call the listen method to tell the server which port to listen to
// server.listen(3000, function () {
//   console.log("Listening to port 3000");
// });
