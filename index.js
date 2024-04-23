const express = require("express");
const authRouter = require("./routes/auth.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/v1/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
