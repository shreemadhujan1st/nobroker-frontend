import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import api from "../services/api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("users/profile/");
      setUser(response.data);
    } catch (error) {
      console.log(error.response || error);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "80px" }}>
          Loading...
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">

          <div className="profile-icon">
            👤
          </div>

          <h1>My Profile</h1>

          <div className="profile-info">

            <div className="profile-row">
              <span>Username</span>
              <strong>{user?.username}</strong>
            </div>

            <div className="profile-row">
              <span>Email</span>
              <strong>{user?.email}</strong>
            </div>

            <div className="profile-row">
              <span>Phone</span>
              <strong>{user?.phone || "Not Added"}</strong>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;