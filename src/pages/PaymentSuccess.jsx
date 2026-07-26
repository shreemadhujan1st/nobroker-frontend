import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem("is_premium", "true");

    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.1)",
        }}
      >
        <h1>✅ Payment Successful</h1>

        <h2>Welcome to HomeHub Premium</h2>

        <p>
          Redirecting to Home...
        </p>
      </div>
    </div>
  );
}

export default PaymentSuccess;