// src/pages/Login.tsx

import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefcf9] px-4">
      <div className="w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-[#2a1c0f] mb-8">
          Welcome back
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2a1c0f]"
            >
              Username or email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter  your username or email"
              className="mt-1 w-full px-4 py-2 border border-[#eadcd1] rounded-md placeholder-[#a16d3e] focus:outline-none focus:ring-2 focus:ring-[#d47312]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#2a1c0f]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter  your password"
              className="mt-1 w-full px-4 py-2 border border-[#eadcd1] rounded-md placeholder-[#a16d3e] focus:outline-none focus:ring-2 focus:ring-[#d47312]"
            />
          </div>

          <div className="text-sm text-[#7d5b41]">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#d47312] hover:bg-[#c16410] text-white py-2 rounded-md font-semibold transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-[#7d5b41] mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
