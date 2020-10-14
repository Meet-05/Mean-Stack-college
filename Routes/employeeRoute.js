const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");
const employeeContoller = require("../controllers/employeeControlller");

router
  .route("/")
  .get(employeeContoller.getEmployee)
  .post(employeeContoller.insertData);
router
  .route("/:id")
  .get(employeeContoller.findEmployee)
  .delete(employeeContoller.deleteEmployee)
  .patch(employeeContoller.updateEmployee)
  .put(employeeContoller.updateEmployeeWhole);
module.exports = router;
