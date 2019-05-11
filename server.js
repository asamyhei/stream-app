//Install express server
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/stream-app"));

app.get("/*", function (req, res) {
   res.sendFile(path.join(__dirname + "/dist/stream-app/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('listening on port 8080')
});

