function aboutHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("About page");
}

module.exports = aboutHandler;

