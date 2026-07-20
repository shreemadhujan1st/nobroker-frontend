import { useEffect, useState } from "react";
import "./PropertyList.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import api from "../../services/api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("properties/");

        // Handles both paginated and non-paginated responses
        if (response.data.results) {
          setProperties(response.data.results);
        } else {
          setProperties(response.data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}

export default PropertyList;