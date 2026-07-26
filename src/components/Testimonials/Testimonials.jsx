import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <h3>Rahul Sharma</h3>

          <p>
            "I found my dream apartment within two days.
            HomeHub made everything simple and there was
            absolutely no brokerage."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <h3>Priya Patel</h3>

          <p>
            "The property details were accurate and I could
            directly contact the owner. Great experience!"
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>

          <h3>Amit Kumar</h3>

          <p>
            "Clean interface, verified properties and fast
            response from owners. Highly recommended."
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;