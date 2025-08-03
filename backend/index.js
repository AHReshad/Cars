const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const AuthRouter = require("./Routes/AuthRouter");
require("dotenv").config();
require("./Models/db");
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(" Server is running on port 8080");
});

app.use(bodyparser.json());
app.use(cors());

app.get("/ding", (req, res) => {
  res.send("Dong");
});

app.use("/auth", AuthRouter);
