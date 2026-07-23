import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MyPropertyCard from "../components/MyPropertyCard/MyPropertyCard";
import api from "../services/api";

function MyProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const response = await api.get("properties/my-properties/");
      setProperties(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load your properties.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#009688",
          }}
        >
          My Properties
        </h1>

        {loading ? (
          <h2 style={{ textAlign: "center" }}>
            Loading...
          </h2>
        ) : properties.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No Properties Found
          </h2>
        ) : (
          properties.map((property) => (
            <MyPropertyCard
              key={property.id}
              property={property}
            />
          ))
        )}
      </div>
    </>
  );
}

export default MyProperties;