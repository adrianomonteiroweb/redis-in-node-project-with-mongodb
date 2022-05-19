const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  email: String,
  role: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
