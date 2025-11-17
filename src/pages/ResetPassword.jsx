import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password,
      });

      toast.success("Password reset successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="password"
          placeholder="New Password"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Reset Password
        </button>
      </form>

      <div className="text-center mt-3">
        <Link to="/login" className="text-blue-600">
          Go to Login
        </Link>
      </div>
    </div>
  );
}
