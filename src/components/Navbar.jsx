import { FaTasks } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaTasks className="logo-icon" />
        <h2>Task Manager</h2>
      </div>

      <p className="tagline">Organize your work efficiently</p>
    </nav>
  );
}

export default Navbar;