const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const rimraf = require("rimraf");
const path = require("path");
const uploadsDir = __dirname + "/uploads";
const fs = require("fs");
const cors = require("cors");
const caseRoute = require("./routes/useCase");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const productRoute = require("./routes/products");
const port = process.env.PORT || 5000;


//paytm

const checksum_lib = require("./routes/Paytm/checksum")
const config = require("./routes/Paytm/config")
const { response } = require("express")

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose
  .connect(process.env.COSMOS_URI, {
    auth: {
      username: process.env.COSMOSDB_USER,
      password: process.env.COSMOSDB_PASSWORD,
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false,
  })
  .then(() => console.log("Connection to CosmosDB successful"))
  .catch((err) => console.error(err));

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/products", productRoute);
app.use("/case", caseRoute);

app.use(express.static(path.resolve(__dirname, "./clientXR/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./clientXR/build", "index.html"));
});

app.listen(port, () => {
  console.log("server is running");
});
