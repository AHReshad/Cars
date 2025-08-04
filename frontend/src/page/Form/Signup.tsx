// src/pages/Signup.tsx

import React from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefcf9] px-4">
      <div className="w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-[#2a1c0f] mb-8">
          Create an account
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2a1c0f]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border border-[#eadcd1] rounded-md placeholder-[#a16d3e] focus:outline-none focus:ring-2 focus:ring-[#d47312]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2a1c0f]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              className="mt-1 w-full px-4 py-2 border border-[#eadcd1] rounded-md placeholder-[#a16d3e] focus:outline-none focus:ring-2 focus:ring-[#d47312]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d47312] hover:bg-[#c16410] text-white py-2 rounded-md font-semibold transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-[#7d5b41] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
