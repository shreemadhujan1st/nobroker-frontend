import { Link } from "react-router-dom";
import "./PropertyCard.css";
import api from "../../services/api";

function PropertyCard({ property }) {
  const addToFavorites = async () => {
    try {
      const response = await api.post("properties/favorites/", {
        property: property.id,
      });

      console.log(response.data);
      alert("❤️ Added to Favorites!");
    } catch (error) {
      console.log(error.response);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
        className="property-image"
      />

      <div className="property-content">
        <h2>{property.title}</h2>

        <p>📍 {property.location}</p>

        <h3>₹ {Number(property.price).toLocaleString()}</h3>

        <p>🏠 {property.property_type}</p>

        <p>
          🛏 {property.bedrooms} Bedroom
          {property.bedrooms > 1 ? "s" : ""}
        </p>

        <p>
          🚿 {property.bathrooms} Bathroom
          {property.bathrooms > 1 ? "s" : ""}
        </p>

        <p>📐 {property.area} sq.ft</p>

        <div className="property-footer">
          <Link to={`/property/${property.id}`}>
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <span
            className="heart"
            onClick={addToFavorites}
            style={{ cursor: "pointer" }}
          >
            ❤️
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;