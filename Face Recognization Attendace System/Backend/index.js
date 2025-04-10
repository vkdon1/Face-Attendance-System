const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connection");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/", require("./routes/GetAttendance"));
app.listen(5000, () => console.log("Server running on port 5000"));
