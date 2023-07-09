const express = require("express");
const db = require("./DB/db");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static("views"));

app.use("/employes", require("./Route/employesRoute"));

app.listen(PORT, () => {
  console.log(`Server Listening on http://127.0.0.1:${PORT}`);
});
