import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
    { path: "/forgot-password", label: "Forgot Password" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">🔐 Password Reset App</h1>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded-md transition ${
                location.pathname === item.path
                  ? "bg-white text-blue-600 font-semibold"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
