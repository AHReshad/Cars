const router = require("express").Router();
const { signup, login } = require("../Controllers/AuthController");
const {
  signupvalidation,
  loginvalidation,
} = require("../MiddleWeres/AuthValidation");

 router.post("/login", loginvalidation, login);
router.post("/signup", signupvalidation, signup);

module.exports = router;
