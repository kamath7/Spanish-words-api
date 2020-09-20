const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const wordsRouter = require("./routes/Word");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error Connecting!");
});
db.once("open", () => {
  console.log("You are now connected!");
});

app.use("/api/words", wordsRouter);
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
