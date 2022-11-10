//import fetch
import fetch from "node-fetch";
//unsplash api wrapper
import { createApi } from "unsplash-js";

//Express server
const express = require("express");
const app = express();
const port = 3000;

//Path api for node
const path = require("path");

//Hbs template engine for express
const hbs = require("hbs");

//Serving static files in Express
app.use(express.static(path.join(__dirname, "/public")));

//Serving handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const apiUrl = "https://api.unsplash.com/search/";

const unsplashApi = createApi({
  accessKey: process.env.ACCESS_KEY,
  fetch: nodeFetch,
});

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=nv9ZbWGHK5RFUysJCY2zFSpiVdw6ySU9_F6IWuL9YzU
//http://dog-api.kinduff.com/api/facts?number=3
const query = "office";

//Testing express server
app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
});
