const express = require("express");
const {
  markAttendance,
  getAttendance,
} = require("../controllors/AttandanceControllor");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/mark", authMiddleware, markAttendance); // ✅ Fix route path
router.get("/", authMiddleware, getAttendance);

module.exports = router;
