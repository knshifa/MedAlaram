const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
 userId: String,
 medicineId: String,
  status: {
    type: String,
    enum: ["taken", "missed"]
  }
});

module.exports = mongoose.model("Log", logSchema);