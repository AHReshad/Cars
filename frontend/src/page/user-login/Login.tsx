import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../utils";

export default function Login() {
  const [logininfo, setlogininfo] = useState({ email: "", password: "" });
  const [showpassword, setShowpassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogininfo((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowpassword(!showpassword);
  };

  const handle = async (e) => {
    e.preventDefault();
    const { email, password } = logininfo;
    if (!email || !password) return handleError("Please enter both fields");

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logininfo),
      });

      const data = await response.json();
      const { success, message, jwtToken, name, error } = data;

      if (success) {
        handleSuccess(message || "Login successful!");
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedinUser", name);
        setTimeout(() => navigate("/index"), 1000);
      } else if (error) {
        handleError(error?.details[0] || "Login failed");
      } else {
        handleError(message || "Invalid credentials");
      }

      if (!response.ok) throw new Error(data.message || "Login failed");
    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 modern-bg">
      <div
        className="modern-glass border-0 shadow p-5 rounded-4 text-white"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h2 className="text-center text-black mb-4 fw-bold">Welcome Back</h2>
        <form className="signup-wrapper" onSubmit={handle}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control form-control-lg bg-transparent text-white border-white"
              placeholder="Enter your Email"
              value={logininfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 position-relative">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              id="password"
              type={showpassword ? "text" : "password"}
              name="password"
              className="form-control form-control-lg bg-transparent text-white border-white"
              placeholder="Enter your password"
              value={logininfo.password}
              onChange={handleChange}
            />
            <i
              className={`bi ${showpassword ? "bi-eye-slash" : "bi-eye"}`}
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "15px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "white",
                fontSize: "1.2rem",
              }}
            ></i>
          </div>
          <button
            type="submit"
            className="btn btn-light w-100 py-2 fw-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-white-50">
            Don't have an account?{" "}
            <Link to="/signup" className="text-white fw-semibold">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
