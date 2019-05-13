//Install express server
const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const http = require("http");
const https = require("https");
const fs = require("fs");

const privateKey = fs.readFileSync("server.key", "utf8");
const certificate = fs.readFileSync("server.cert", "utf8");
const credentials = {key: privateKey, cert: certificate};

const dirTree = require("directory-tree");
const filteredTree = dirTree("../Series", {extensions: /\.(mkv|mp4|m4v|srt)$/, exclude: /Anime|@eaDir/});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/stream-app"));

app.get("/api/seriesTree", function(req, res) {
  res.send(filteredTree);
});

app.get("/api/video/:path", function(req, res) {

  const pathToVideo = req.param.path;
  const stat = fs.statSync(pathToVideo);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(pathToVideo, {start, end});
    const head = {
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(pathToVideo).pipe(res);
  }
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/stream-app/index.html"));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
  console.log("listening 8080");
});

httpsServer.listen(8443, () => {
  console.log("listening 8443");
});
