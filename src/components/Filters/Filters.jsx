import "./Filters.css";

function Filters({
  propertyType,
  setPropertyType,
  bedrooms,
  setBedrooms,
}) {
  return (
    <div className="filters">

      <select disabled>
        <option>Buy</option>
      </select>

      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="">Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
        <option value="Plot">Plot</option>
      </select>

      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      >
        <option value="">Bedrooms</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
      </select>

    </div>
  );
}

export default Filters;