import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        <h1 className="text-lg font-bold">Password Task</h1>

        <div className="space-x-6">

          <Link to="/" className="hover:underline">
            Register
          </Link>

        

        </div>
      </div>
    </nav>
  );
}
