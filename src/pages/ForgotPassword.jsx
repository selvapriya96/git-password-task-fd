import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/forgot-password", { email });
      toast.success(res.data.message || "Reset link sent");
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            className="w-full p-2 border rounded"
            required
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
