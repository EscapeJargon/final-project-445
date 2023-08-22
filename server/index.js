const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require.mongoose;
const uri = process.env.MONGO_URI;
const port = process.env.PORT;
const app = express();
app.use(cors()); // Enable CORS for all routes

mongoose.connect(uri);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

const articleRouter = require("./routes/articles");
app.use("/articles", articleRouter);

app.listen(port, () => {
  console.log(`costaatt app listening on port ${port}`);
});
