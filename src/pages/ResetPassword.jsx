import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api"; // use your axios instance

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Invalid or missing token");
      return;
    }

    try {
      const res = await api.post(`/reset-password/${token}`, { password });
      toast.success(res.data.message || "Password reset successfully!");
      
      setTimeout(() => navigate("/login"), 1500); // redirect to login
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="border p-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Reset Password
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-600">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
