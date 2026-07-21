import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await api.get(`properties/${id}/`);
        setProperty(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "10px"
        }}
      />

      <h1>{property.title}</h1>

      <h2>₹ {Number(property.price).toLocaleString()}</h2>

      <p>📍 {property.location}</p>

      <p>🏠 {property.property_type}</p>

      <p>🛏 {property.bedrooms} Bedrooms</p>

      <p>🚿 {property.bathrooms} Bathrooms</p>

      <p>📐 {property.area} sq.ft</p>

      <p>{property.description}</p>

      <h3>Owner: {property.owner}</h3>
    </div>
  );
}

export default PropertyDetails;