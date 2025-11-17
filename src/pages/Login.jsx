import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", formData);
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="email" type="email" placeholder="Email"
          className="border p-2 w-full" onChange={handleChange} required />

        <input name="password" type="password" placeholder="Password"
          className="border p-2 w-full" onChange={handleChange} required />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      <div className="text-center mt-3">
        <Link to="/forgot-password" className="text-blue-600">
          Forgot Password?
        </Link>
      </div>

      <div className="text-center mt-2">
        <Link to="/" className="text-gray-600">
          Create an Account
        </Link>
      </div>


       <div className="mt-2 text-center">
        <Link to="/reset-password/123" className="text-green-600 underline">
          Test Reset Page
        </Link>
      </div>
    </div>
  );
}
