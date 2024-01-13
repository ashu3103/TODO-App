const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
// const {connectPassport} = require("./utils/provider");
// const session = require('express-session')
const path = require("path");
// const cors = require("cors");

// 
require("dotenv").config({ path: "./config/config.env" });

const app = express();

const _dirname = path.dirname("");
const buildpath = path.join(__dirname, "../client/packages/react/build");

app.use(express.static(buildpath));

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

const dbURL = "mongodb://localhost:27017/mern-auth";
console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB successfully connected...."))
  .catch((err) => console.log(err));

mongoose.set('strictQuery', true);

const port = 5000;

// Set up google auth

// app.use(session({
//   secret:process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized:false,
// }))
// app.use(passport.initialize());
// app.use(passport.session());
// connectPassport();

// app.use("/", require("./router/routes.js"));

app.listen(port, () => console.log(`Server up and running on port ${port}`));