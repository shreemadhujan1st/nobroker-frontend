import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>HomeHub</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Buy</Link>
        </li>

        <li>
          <Link to="/">Rent</Link>
        </li>

        <li>
          <Link to="/">Commercial</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <Link to="/favorites">
              <button className="login-btn">
                Favorites
              </button>
            </Link>

            <Link to="/profile">
              <button className="login-btn">
                Profile
              </button>
            </Link>

            <button
              className="signup-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="signup-btn">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;