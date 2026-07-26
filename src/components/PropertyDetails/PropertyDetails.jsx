import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    api.get(`properties/${id}/`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!property) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-page">
      <div className="details-card">

        <h1>{property.title}</h1>

        {property.image && (
          <img
            src={property.image}
            alt={property.title}
            className="details-image"
          />
        )}

        <h2>₹ {property.price}</h2>

        <p><b>Location:</b> {property.location}</p>

        <p><b>Type:</b> {property.property_type}</p>

        <p><b>Listing:</b> {property.listing_type}</p>

        <p><b>Bedrooms:</b> {property.bedrooms}</p>

        <p><b>Bathrooms:</b> {property.bathrooms}</p>

        <p><b>Area:</b> {property.area} sqft</p>

        <p>{property.description}</p>

        <hr />

        <h2>Owner Details</h2>

        <p><b>Name:</b> {property.owner}</p>

        <p><b>Email:</b> {property.owner_email}</p>

        <p><b>Phone:</b> {property.owner_phone}</p>

        <button className="contact-btn">
          Contact Owner
        </button>

      </div>
    </div>
  );
}

export default PropertyDetails;
