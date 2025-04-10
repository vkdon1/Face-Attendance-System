const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
