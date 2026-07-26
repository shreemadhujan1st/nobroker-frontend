import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await api.post(
        "users/register/",
        {
          username: form.username,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }
      );

      console.log(response.data);

      alert("Registration Successful ✅");

      setForm({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {

      console.log("Registration Error:", error.response);

      if (error.response && error.response.data) {

        let message = "";

        Object.keys(error.response.data).forEach((key) => {

          message += `${key}: ${error.response.data[key]}\n`;

        });

        alert(message);

      } else {

        alert("Server Error");

      }

    }

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <p>Create your HomeHub account</p>

        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>

          </div>

          <label>Confirm Password</label>

          <div className="password-box">

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </span>

          </div>

          <button type="submit">

            Create Account

          </button>

        </form>

        <div className="login-link">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;