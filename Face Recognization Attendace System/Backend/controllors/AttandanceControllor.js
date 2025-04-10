const Attendance = require("../models/Attandence");

// ✅ Function to mark attendance
const markAttendance = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const newAttendance = new Attendance({ userId, timestamp: new Date() });
    await newAttendance.save();

    res.status(201).json({ message: "✅ Attendance marked successfully!" });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(500).json({ error: "❌ Error marking attendance" });
  }
};

// ✅ Function to get attendance records
const getAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res
      .status(200)
      .json({ msg: "✅ Data retrieved successfully", info: attendanceRecords });
  } catch (error) {
    console.error("❌ Error fetching attendance records:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { markAttendance, getAttendance };
