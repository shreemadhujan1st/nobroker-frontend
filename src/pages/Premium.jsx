import { useNavigate } from "react-router-dom";
import "./Premium.css";

function Premium() {

  const navigate = useNavigate();

  return (
    <div className="premium-page">

      <div className="premium-card">

        <h1>🏆 HomeHub Premium</h1>

        <p className="subtitle">
          Unlock Owner Contact Details
        </p>

        <div className="benefits">

          <p>✅ View Owner Phone Number</p>

          <p>✅ View Owner Email</p>

          <p>✅ Unlimited Contact Access</p>

          <p>✅ Premium Support</p>

          <p>✅ Future Premium Features</p>

        </div>

        <h2>₹299 / Month</h2>

        <button
          onClick={() => navigate("/payment")}
        >
          Upgrade Now
        </button>

        <small>
          Payment Gateway Coming Soon
        </small>

      </div>

    </div>
  );
}

export default Premium;