import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", data);
      toast.success(res.data.message || "Registered successfully");

      setData({ name: "", email: "", password: "" });
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
