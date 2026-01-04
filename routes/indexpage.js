function indexHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Index page");
}

module.exports = indexHandler;
