const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists, you can Login",
        success: false,
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const userModel = new UserModel({
      name,
      email,
      password: hashedpassword,
      plainpassword: password,
    });

    await userModel.save();

    res.status(201).json({
      message: "Signup  successfully",
      success: true,
    });

    // Continue logic: hash password, save user, etc.
  } catch (error) {
    console.error("Signup Error", error);
    res.status(500).json({
      message: "internal Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body; // this take the email and password from the frontend
    const user = await UserModel.findOne({ email }); // this chcks if the user exists in the database
    const errormsg = "Auth faild: Email or password is wrong!";

    if (!user) {
      return res.status(409).json({ message: errormsg, success: false }); // if the user does not exi
    }

    const ispassEqual = await bcrypt.compare(password, user.password); // this compares the password from the frontend with the hashed password in the database .
    if (!ispassEqual) {
      return res.status(409).json({ message: errormsg, sucess: false });
    }

    const jwtToken = jwt.sign(
      // this create a token jwt for the user
      { email: user.email, _id: user._id },
      (process.env.JWT_SECRET = "secret-123"),
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });

    // Continue logic: hash password, save user, etc.
  } catch (error) {
    console.error("Login Error", err);
    res.status(500).json({
      message: "internal Server error",
    });
  }
};

module.exports = {
  signup,
  login,
};
