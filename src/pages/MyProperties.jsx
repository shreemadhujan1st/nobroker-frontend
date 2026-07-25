import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MyPropertyCard from "../components/MyPropertyCard/MyPropertyCard";
import api from "../services/api";

function MyProperties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {

      const response = await api.get(
        "properties/my-properties/"
      );

      setProperties(response.data);

    } catch (error) {

      console.log(error.response);

      alert("Unable to load your properties.");

    }
  };

  const deleteProperty = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `properties/${id}/`
      );

      setProperties((prev) =>
        prev.filter(
          (property) => property.id !== id
        )
      );

      alert("Property deleted successfully.");

    } catch (error) {

      console.log(error.response);

      alert("Unable to delete property.");

    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >

        <h1
          style={{
            color: "#009688",
            marginBottom: "30px",
          }}
        >
          My Properties
        </h1>

        {properties.length === 0 ? (

          <h3>No properties found.</h3>

        ) : (

          properties.map((property) => (

            <MyPropertyCard
              key={property.id}
              property={property}
              onDelete={deleteProperty}
            />

          ))

        )}

      </div>
    </>
  );
}

export default MyProperties;