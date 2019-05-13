//Install express server
const path = require("path");
const express = require("express");
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
// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/stream-app"));

app.get("/api/seriesTree", function (req, res) {
  res.send(filteredTree);
});

app.get("/*", function (req, res) {
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
