import { Link } from "react-router-dom";

const Firstsection = () => {
  return (
    <section>
      <div className="first-section">
        <div className="first-section-block">
          <div className="first-section-text">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>
              <Link to={`/booking`}>Reserve a Table</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="first-section-img"></div>
    </section>
  );
};

export default Firstsection;
