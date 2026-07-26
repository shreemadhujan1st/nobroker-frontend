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

        <p>
          Complete your payment to unlock Premium Features
        </p>

        <div className="price">

          ₹299 / Month

        </div>

        <div className="qr-box">

          <img
            src="/payment-qr.jpg"
            alt="UPI Payment QR"
            className="payment-qr"
          />

          <h3>Scan Using Any UPI App</h3>

          <p>

            PhonePe • Google Pay • Paytm

          </p>

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

        <small>

          Demo Payment Flow

        </small>

      </div>

    </div>

  );

}

export default Payment;