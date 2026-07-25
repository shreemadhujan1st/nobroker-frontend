import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import api from "../services/api";
import "./PropertyDetails.css";
import defaultImage from "../assets/default-property.jpg";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await api.get(`properties/${id}/`);
      setProperty(response.data);
    } catch (error) {
      console.log(error.response);
      alert("Unable to load property.");
    }
  };

  const handleFavorite = async () => {
    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    try {
      await api.post("properties/favorites/", {
        property_id: property.id,
      });

      alert("Property added to Favorites ❤️");
    } catch (error) {
      console.log(error.response);

      alert(
        error.response?.data?.message ||
          "Unable to add to favorites."
      );
    }
  };

  if (!property) {
    return (
      <>
        <Navbar />
        <h2
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          Loading...
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">

        <div className="details-image">
          <img
            src={property.image || defaultImage}
            alt={property.title}
            onError={(e) => {
              e.target.src = defaultImage;
            }}
          />
        </div>

        <div className="details-content">

          <h1>{property.title}</h1>

          <h2>
            ₹{" "}
            {Number(property.price).toLocaleString("en-IN")}
          </h2>

          <p>
            <strong>Location :</strong> {property.location}
          </p>

          <p>
            <strong>Property Type :</strong>{" "}
            {property.property_type}
          </p>

          <p>
            <strong>Bedrooms :</strong> {property.bedrooms}
          </p>

          <p>
            <strong>Bathrooms :</strong> {property.bathrooms}
          </p>

          <p>
            <strong>Area :</strong> {property.area} sqft
          </p>

          <p>
            <strong>Description :</strong>
          </p>

          <p>{property.description}</p>

          <hr />

          <h3>Owner Information</h3>

          <p>
            <strong>👤 Name :</strong> {property.owner}
          </p>

          <p>
            <strong>📧 Email :</strong>{" "}
            {property.owner_email || "Not Available"}
          </p>

          <p>
            <strong>📞 Phone :</strong>{" "}
            {property.owner_phone || "Not Available"}
          </p>

          <button
            className="favorite-btn"
            onClick={handleFavorite}
          >
            ❤️ Add to Favorites
          </button>

        </div>

      </div>
    </>
  );
}

export default PropertyDetails;