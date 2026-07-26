import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post("users/token/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");

      navigate("/");

    } catch (error) {

      console.error(error.response?.data);

      alert("Invalid Username or Password");

    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1 className="login-title">
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Login to your HomeHub account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">

          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;