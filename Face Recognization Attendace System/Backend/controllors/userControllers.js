const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, aadhaarNumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      aadhaarNumber,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error); // Log the actual error
    res
      .status(500)
      .json({ error: "Error registering user", details: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, "vallabh@123", {
      expiresIn: "1h",
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Login error" });
  }
};
