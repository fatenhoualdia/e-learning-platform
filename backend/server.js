console.clear();

const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

require("dotenv").config();
const connectDB = require("./config/dbconnect");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json  
app.use(bodyParser.json());
connectDB();

// routes   
app.use(express.json());
app.use("/user", require("./routs/user"));
app.use("/cours", require("./routs/Cours"));
app.use("/message", require("./routs/message"));
// app.use("/Cours", require("./routs/Cours"));

const Port = process.env.PORT;
app.listen(Port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${Port}`)
);
