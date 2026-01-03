const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

function handleRequest(req, res) {
  const { method, headers } = req;
  const normalizedMethod = method.toLowerCase();
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const trimmedPathname = pathname.replace(/\/+$/, "") || "/";
  console.log("HTTP method:", normalizedMethod);
  console.log("Headers:", headers);
  console.log("Query string params:", parsedUrl.query);
  console.log("Parsed URL:", parsedUrl);
  console.log("Trimmed pathname:", trimmedPathname);

  if (
    (normalizedMethod === "get" || normalizedMethod === "post") &&
    trimmedPathname === "/"
  ) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (normalizedMethod === "get" && trimmedPathname === "/about") {
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
