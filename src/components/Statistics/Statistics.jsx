import "./Statistics.css";

function Statistics() {
  return (
    <section className="stats-section">

      <h2>We Make a Difference</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h1>10K+</h1>
          <p>Properties Listed</p>
        </div>

        <div className="stat-card">
          <h1>5K+</h1>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h1>2K+</h1>
          <p>Property Owners</p>
        </div>

        <div className="stat-card">
          <h1>15+</h1>
          <p>Cities Covered</p>
        </div>

      </div>

    </section>
  );
}

export default Statistics;