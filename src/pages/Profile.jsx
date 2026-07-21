import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import api from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("users/profile/");
      setUser(response.data);
    } catch (error) {
      console.error(error);
      alert("Please login first.");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#009587",
            marginBottom: "25px",
          }}
        >
          My Profile
        </h1>

        {user ? (
          <>
            <h3>Username</h3>
            <p>{user.username}</p>

            <br />

            <h3>Email</h3>
            <p>{user.email || "Not Added"}</p>

            <br />

            <h3>Phone</h3>
            <p>{user.phone || "Not Added"}</p>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
}

export default Profile;