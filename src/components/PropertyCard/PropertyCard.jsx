import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
        className="property-image"
      />

      <div className="property-info">
        <h2>{property.title}</h2>

        <p>
          <strong>₹ {Number(property.price).toLocaleString("en-IN")}</strong>
        </p>

        <p>{property.location}</p>

        <p>{property.property_type}</p>

        <p>
          {property.bedrooms} Beds | {property.bathrooms} Baths
        </p>

        <p>{property.area} sqft</p>
      </div>
    </div>
  );
}

export default PropertyCard;