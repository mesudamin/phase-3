let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("serveris running on port 3000");
});
