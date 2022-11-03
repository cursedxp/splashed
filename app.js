//Express server
const express = require("express");
//Path api for node
const path = require("path");
//Hbs template engine for express
const hbs = require("hbs");
const app = express();
const port = 3000;

//Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));

//Serving handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//Testing express server
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
});
