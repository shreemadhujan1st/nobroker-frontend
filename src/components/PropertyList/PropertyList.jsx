import "./PropertyList.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import properties from "../../data/properties";

function PropertyList() {
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