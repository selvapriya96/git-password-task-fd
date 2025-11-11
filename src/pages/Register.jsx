import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      toast.success("User registered successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" className="border p-2 w-full"
          onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email"
          className="border p-2 w-full" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password"
          className="border p-2 w-full" onChange={handleChange} required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
}
