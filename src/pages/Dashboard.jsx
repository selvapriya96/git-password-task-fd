import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Get token from localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/"); // redirect to login if no token
      return;
    }

    // Fetch user data
    const fetchUser = async () => {
      try {
        const res = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        toast.error("Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="mb-4"><strong>Email:</strong> {user.email}</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
