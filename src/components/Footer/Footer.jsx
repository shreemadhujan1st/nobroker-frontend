import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>HomeHub</h2>

          <p>
            Find your dream property with HomeHub.
            Buy, sell and manage properties easily.
          </p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>

          <Link to="/">Home</Link>

          <Link to="/add-property">
            Add Property
          </Link>

          <Link to="/my-properties">
            My Properties
          </Link>

          <Link to="/favorites">
            Favorites
          </Link>
        </div>

        <div className="footer-section">
          <h2>Contact</h2>

          <p>📧 madhushreel2003@gmail.com</p>

          <p>📞 +91 7204608289</p>

          <p>📍 Mysuru,Karnataka, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 HomeHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;