import { useEffect, useState } from "react";
import "./PropertyList.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import api from "../../services/api";

function PropertyList({ search, propertyType, bedrooms }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, [search, propertyType, bedrooms]);

  const fetchProperties = async () => {
    try {
      setLoading(true);

      let url = "properties/?";

      if (search) {
        url += `search=${search}&`;
      }

      if (propertyType) {
        url += `property_type=${propertyType}&`;
      }

      if (bedrooms) {
        url += `bedrooms=${bedrooms}&`;
      }

      console.log("Request URL:", url);

      const response = await api.get(url);

      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        setProperties(response.data);
      } else if (response.data.results) {
        setProperties(response.data.results);
      } else {
        setProperties([]);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading properties...</h2>;
  }

  return (
    <div className="property-list">
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))
      ) : (
        <h2>No properties found.</h2>
      )}
    </div>
  );
}

export default PropertyList;