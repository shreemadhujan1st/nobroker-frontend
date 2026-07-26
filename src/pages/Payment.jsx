import "./Payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();

  const handlePayment = () => {

    localStorage.setItem("is_premium", "true");

    navigate("/payment-success");

  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h1>🏆 HomeHub Premium</h1>

        <p>Choose your payment method</p>

        <div className="price">
          ₹299 / Month
        </div>

        <div className="qr-box">

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=HomeHubPremium299"
            alt="QR Code"
          />

          <p>Scan using any UPI App</p>

        </div>

        <div className="payment-buttons">

          <button
            className="phonepe"
            onClick={handlePayment}
          >
            🟣 PhonePe
          </button>

          <button
            className="gpay"
            onClick={handlePayment}
          >
            🟢 Google Pay
          </button>

          <button
            className="paytm"
            onClick={handlePayment}
          >
            🔵 Paytm
          </button>

        </div>

        <button
          className="paid-btn"
          onClick={handlePayment}
        >
          I Have Paid
        </button>

      </div>

    </div>
  );
}

export default Payment;