import "./MyPropertyCard.css";

function MyPropertyCard({ property }) {
  return (
    <div className="my-property-card">
      <img
        src={property.image}
        alt={property.title}
        className="property-image"
      />

      <div className="property-details">
        <h2>{property.title}</h2>

        <p>
          <strong>Price :</strong> ₹{property.price?.toLocaleString()}
        </p>

        <p>
          <strong>Location :</strong> {property.location}
        </p>

        <p>
          <strong>Property Type :</strong> {property.property_type}
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

        <p>{property.description}</p>
      </div>
    </div>
  );
}

export default MyPropertyCard;