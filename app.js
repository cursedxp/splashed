//Express server
const express = require("express");
const app = express();
const port = 3000;

//Serving static files in Express
app.use(express.static("public"));

//Testing express server
app.get("/", (req, res) => {
  res.send(`Server is online`);
});

app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
});
