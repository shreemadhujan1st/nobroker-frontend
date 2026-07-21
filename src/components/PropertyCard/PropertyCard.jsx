import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
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

          <span className="heart">❤️</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;