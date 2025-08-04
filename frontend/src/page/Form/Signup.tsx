import React, { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, form);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fefcf9] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-[#333]">Sign Up</h1>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76] focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76] focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#e9ddd2] rounded-md placeholder-[#c39b76] focus:outline-none focus:ring-2 focus:ring-[#d4b29c]"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-[#D47312] text-white rounded-md hover:bg-[#c76710] transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-[#99734D]">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-[#D47312]">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
