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

        <p className="location">
            📍 {property.location}
        </p>

        <h3 className="price">
            {property.price}
        </h3>

        <p>
          {property.bhk} • {property.area}
        </p>

        <div className="property-footer">

          <button className="details-btn">
              View Details
          </button>

          <span className="heart">
              ❤️
          </span>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;