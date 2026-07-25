import { useEffect, useState } from "react";
import "./PropertyList.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import api from "../../services/api";

function PropertyList({
  search,
  listingType,
  propertyType,
  bedrooms,
}) {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, [search, listingType, propertyType, bedrooms]);

  const fetchProperties = async () => {

    try {

      setLoading(true);

      let url = "properties/?";

      if (search) {
        url += `search=${search}&`;
      }

      if (listingType) {
        url += `listing_type=${listingType}&`;
      }

      if (propertyType) {
        url += `property_type=${propertyType}&`;
      }

      if (bedrooms) {
        url += `bedrooms=${bedrooms}&`;
      }

      console.log("Request URL:", url);

      const response = await api.get(url);

      console.log(response.data);

      if (Array.isArray(response.data)) {
        setProperties(response.data);
      } else if (response.data.results) {
        setProperties(response.data.results);
      } else {
        setProperties([]);
      }

    } catch (error) {

      console.log(error.response);

      setProperties([]);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <h2>Loading Properties...</h2>;
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

        <h2>No Properties Found.</h2>

      )}

    </div>
  );

}

export default PropertyList;