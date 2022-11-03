//Express server
const express = require("express");
const app = express();
const port = 3000;

//Testing express server
app.get("/", (req, res) => {
  res.send(`Server is online`);
});

app.listen(port, () => {
  console.log(`Server is runing on port:${port}`);
});
