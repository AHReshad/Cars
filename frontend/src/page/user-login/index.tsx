import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("loggedinUser");
    const token = localStorage.getItem("token");

    if (!storedName || !token) {
      navigate("/login");
    } else {
      setUsername(storedName);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedinUser");
    localStorage.removeItem("token");
    toast.warn("Logged Out!", {
      position: "top-right",
      autoClose: 1000,
    });

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="hero">
      <nav className="navbar navbar-expand-lg w-100 px-5 py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo fw-bold fs-1 text-white">
            <a href="#" className="text-white text-decoration-none ">
              LO <span className="text-danger">GO</span>
            </a>
          </div>
          <ul className="navbar-nav flex-row gap-4 mx-auto">
            <li className="nav-item">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="text-center text-white">
          <h2>Welcome, {Username}</h2>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
