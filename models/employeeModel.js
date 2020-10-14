const mongoose = require("mongoose");

//definfing a schema for our employee model
const employeeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "An Employe should have an id"],
    unique: true,
  },
  jobTitleName: String,
  firstName: {
    type: String,
    required: [true, "an Employye should have a name"],
  },
  lastName: {
    type: String,
    required: [true, "An employee should have last name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "An employee should have a phone number"],
  },
  email: {
    type: String,
    required: [true, "An employee should have an email"],
  },
});

//creating a model based on the schema defined above.
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
