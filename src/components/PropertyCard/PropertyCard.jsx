import "./PropertyCard.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import defaultImage from "../../assets/default-property.jpg";

function PropertyCard({ property }) {

  const navigate = useNavigate();

  const handleFavorite = async (e) => {

    e.stopPropagation();

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    try {

      await api.post(
        "properties/favorites/",
        {
          property_id: property.id,
        }
      );

      alert("Property added to Favorites ❤️");

    } catch (error) {

      console.log(error.response);

      alert(
        error.response?.data?.message ||
        "Unable to add to favorites."
      );

    }

  };

  return (

    <div
      className="property-card"
      onClick={() => navigate(`/property/${property.id}`)}
      style={{ cursor: "pointer" }}
    >

      <img
        src={property.image || defaultImage}
        alt={property.title}
        className="property-image"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />

      <div className="property-info">

        <h2>{property.title}</h2>

        <p>
          <strong>
            ₹ {Number(property.price).toLocaleString("en-IN")}
          </strong>
        </p>

        <p>{property.location}</p>

        <p>{property.property_type}</p>

        <p>
          {property.bedrooms} Beds | {property.bathrooms} Baths
        </p>

        <p>{property.area} sqft</p>

        <button
          className="favorite-btn"
          onClick={handleFavorite}
        >
          ❤️ Add to Favorites
        </button>

      </div>

    </div>

  );

}

export default PropertyCard;