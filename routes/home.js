function homeHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Home page");
}

module.exports = homeHandler;

