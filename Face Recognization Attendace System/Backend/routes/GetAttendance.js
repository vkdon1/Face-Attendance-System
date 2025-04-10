const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attandence"); // Ensure correct spelling

// GET Attendance Records
router.get("/attendance-record", async (req, res) => {
  try {
    const records = await Attendance.find(); // Await the database query

    if (records.length > 0) {
      res
        .status(200)
        .json({ msg: "Data retrieved successfully", info: records });
    } else {
      res.status(404).json({ msg: "No data found" });
    }
  } catch (error) {
    console.error("Error fetching attendance records:", error); // Improved error logging
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router; // Ensure correct export
