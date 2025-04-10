const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vallabh2002:vallabh2002@vdprojects.gmgyj.mongodb.net/attandanceManager?retryWrites=true&w=majority&appName=vdprojects"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
};

module.exports = connectDB;
