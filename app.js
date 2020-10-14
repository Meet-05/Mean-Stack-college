const { json } = require("body-parser");
const express = require("express");
const { url } = require("inspector");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

const employeeRouter = require("./Routes/employeeRoute");

app.use(express.json());
app.use(morgan("dev"));

app.use("/employee", employeeRouter);
mongoose.connect(
  "mongodb://localhost/EmployeeDb",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to databse succesfully");
  }
);

const port = 3000;
app.listen(port, () => {
  console.log("Server is up and running succesfully");
});
