const Employee = require("../models/employeeModel");

exports.insertData = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json({
      status: "succes",
      data: {
        employee: newEmployee,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const data = await Employee.find();
    res.status(200).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (e) {
    res.json(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const data = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.findEmployee = async (req, res) => {
  try {
    const data = await Employee.findById(req.params.id);
    res.status(400).json({
      status: "success",
      message: data,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(400).json({
      status: "success",
      message: "deleted succesfully",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};


exports.updateEmployeeWhole = async (req, res) => {
  try {
    const data = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};


