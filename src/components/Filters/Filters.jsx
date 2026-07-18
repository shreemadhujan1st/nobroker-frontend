import "./Filters.css";

function Filters() {
  return (
    <div className="filters">

      <select>
        <option>Buy</option>
        <option>Rent</option>
      </select>

      <select>
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Independent House</option>
      </select>

      <select>
        <option>BHK</option>
        <option>1 BHK</option>
        <option>2 BHK</option>
        <option>3 BHK</option>
        <option>4 BHK</option>
      </select>

      <select>
        <option>Budget</option>
        <option>₹20 Lakhs</option>
        <option>₹50 Lakhs</option>
        <option>₹1 Crore</option>
      </select>

    </div>
  );
}

export default Filters;