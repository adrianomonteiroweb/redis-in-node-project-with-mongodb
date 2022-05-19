"use strict";

const Employee = require("../config/db");

module.exports = new class EmployeesRepository {
  getAll() {
    return Employee.find();
  }
}
