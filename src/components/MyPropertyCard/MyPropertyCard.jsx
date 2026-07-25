import "./MyPropertyCard.css";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/default-property.jpg";

function MyPropertyCard({ property, onDelete }) {

  return (

    <div className="my-property-card">

      <img
        src={property.image || defaultImage}
        alt={property.title}
        className="property-image"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />

      <div className="property-details">

        <h2>{property.title}</h2>

        <p>
          <strong>Price :</strong>
          {" "}
          ₹
          {Number(property.price).toLocaleString("en-IN")}
        </p>

        <p>
          <strong>Location :</strong>
          {" "}
          {property.location}
        </p>

        <p>
          <strong>Property :</strong>
          {" "}
          {property.property_type}
        </p>

        <p>
          <strong>Bedrooms :</strong>
          {" "}
          {property.bedrooms}
        </p>

        <p>
          <strong>Bathrooms :</strong>
          {" "}
          {property.bathrooms}
        </p>

        <p>
          <strong>Area :</strong>
          {" "}
          {property.area} sqft
        </p>

        <p>{property.description}</p>

        <div className="property-actions">

          <Link
            to={`/edit-property/${property.id}`}
            className="edit-btn"
          >
            ✏ Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => onDelete(property.id)}
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default MyPropertyCard;