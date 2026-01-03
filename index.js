const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

function handleRequest(req, res) {
  const { method } = req;
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const trimmedPathname = pathname.replace(/\/+$/, "") || "/";
  console.log("Parsed URL:", parsedUrl);
  console.log("Trimmed pathname:", trimmedPathname);

  if (method === "GET" && trimmedPathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (method === "GET" && trimmedPathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
