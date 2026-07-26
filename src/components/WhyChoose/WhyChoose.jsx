import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-section">

      <h2>Why Choose HomeHub?</h2>

      <div className="why-grid">

        <div className="why-card">
          <h3>🏠 Verified Properties</h3>
          <p>
            Every property is verified before being listed.
          </p>
        </div>

        <div className="why-card">
          <h3>💰 No Brokerage</h3>
          <p>
            Contact owners directly without paying brokerage.
          </p>
        </div>

        <div className="why-card">
          <h3>⚡ Easy Search</h3>
          <p>
            Search by city, price, type and bedrooms.
          </p>
        </div>

        <div className="why-card">
          <h3>📞 Direct Owner Contact</h3>
          <p>
            View owner details after opening the property.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;