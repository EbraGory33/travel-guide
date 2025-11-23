import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="landing-section">
        <div className="landing-content">
          <div className="landing-text-container">
            <h1 className="landing-title">
              Where all your travel plans come together.
            </h1>
            <p className="landing-description">
              Map out your itinerary, explore guides from others, and keep your
              bookings tidy — all in one place.
            </p>
          </div>
          <div className="landing-actions">
            {/* For the Action buttons */}
            {/* TODO: Make this button functional*/}
            <Link className="btn-primary" to="/">
              Start Planning
            </Link>
          </div>
        </div>
        {/* Devlop later for demo */}
        {/* <div></div> */}
      </div>
    </>
  );
}
