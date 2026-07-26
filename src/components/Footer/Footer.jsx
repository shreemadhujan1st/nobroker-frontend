import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>HomeHub</h2>

          <p>
            HomeHub helps buyers, renters and owners connect
            directly without paying brokerage.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Buy Property</li>
            <li>Rent Property</li>
            <li>Favorites</li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>📧 support@homehub.com</p>

          <p>📞 +91 98765 43210</p>

          <p>📍 Bangalore, India</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 HomeHub. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;