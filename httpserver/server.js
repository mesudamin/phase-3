let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end("404 not found");
  }
});

port = 3000;
server.listen(port, () => {
  console.log("serveris running on port 3000");
});
