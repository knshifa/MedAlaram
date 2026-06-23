const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  userId: String,
  name: String,
  dosage: String,
  time: String,
  startDate: Date,
  endDate: Date
});

module.exports = mongoose.model("Medicine", medicineSchema);