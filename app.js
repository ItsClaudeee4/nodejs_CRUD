const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const allRoutes = require("./routes/allRoutes");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

//auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//auto refresh

mongoose
  .connect(
    "mongodb+srv://hichemcherki:hichem.00@itsclaudeee2.swkjjgi.mongodb.net/?retryWrites=true&w=majority&appName=ItsClaudeee2"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(allRoutes);
