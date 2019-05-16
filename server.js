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
const filteredSeriesTree = dirTree("../Series", {extensions: /\.(mkv|mp4|m4v|avi|srt)$/, exclude: /Anime|@eaDir/});
const filteredFilmTree = dirTree("../Films", {extensions: /\.(mkv|mp4|m4v|avi|srt)$/, exclude: /Anime|@eaDir/});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/stream-app"));

app.get("/api/tree", function (req, res) {
  res.send([filteredSeriesTree, filteredFilmTree]);
});

app.get("/api/videoFile/:path", function (req, res) {
  const node = getNodeByName(filteredSeriesTree, req.params.path);
  console.log()
  console.log(node.path)
  res.download(path.resolve(__dirname + "/" + node.path));
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

function getNodeByName(node, name) {
  var reduce = [].reduce;

  function runner(result, node) {
    if (result || !node) {
      return result;
    }
    return node.name === name && node || //is this the proper node?
      runner(null, node.children) || //process this nodes children
      reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
  }

  return runner(null, node);
}

