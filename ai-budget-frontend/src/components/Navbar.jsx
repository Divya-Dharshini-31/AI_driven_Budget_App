import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="text-xl font-bold">AI Budget App</div>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/login" className="mx-2">Login</Link>
      </div>
    </nav>
  );
}
