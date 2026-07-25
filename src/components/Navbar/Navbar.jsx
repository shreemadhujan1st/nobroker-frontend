import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  const logout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    alert("Logged out successfully.");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <div className="logo">

        <Link to="/">
          HomeHub
        </Link>

      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {token && (
          <>
            <Link to="/add-property">
              Add Property
            </Link>

            <Link to="/my-properties">
              My Properties
            </Link>

            <Link to="/favorites">
              Favorites
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}

        {!token && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>

    </nav>

  );

}

export default Navbar;