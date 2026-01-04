const url = require("url");
const homeHandler = require("./home");
const aboutHandler = require("./about");
const indexHandler = require("./indexpage")

const routes = {
  "/": {
    get: homeHandler,
    post: homeHandler,
  },
  "/about": {
    get: aboutHandler,
  },
  "/index": {
    get: indexHandler,
  },
};

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

  const routeConfig = routes[trimmedPathname];
  const handler = routeConfig && routeConfig[normalizedMethod];

  if (handler) {
    handler(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

module.exports = handleRequest;
