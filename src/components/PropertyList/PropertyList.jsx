import { useEffect, useState } from "react";
import "./PropertyList.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import api from "../../services/api";

function PropertyList({
  search,
  propertyType,
  bedrooms,
}) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
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

        if (response.data.results) {
          setProperties(response.data.results);
        } else {
          setProperties(response.data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);

        if (error.response) {
          console.log("Response Error:", error.response.data);
        }
      }
    };

    fetchProperties();
  }, [search, propertyType, bedrooms]);

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