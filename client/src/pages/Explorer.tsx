import { useState } from "react";
import { Link } from "react-router-dom";
import { PlacesCard } from "../components/Layout";
export default function Explorer() {
  const [place, setPlace] = useState("New York");
  return (
    <>
      <div className="explorer-section">
        <div className="image-wrapper">
          <img
            src="src/assets/download.jpeg"
            alt=""
            className="h-[250px] w-[1000px]"
          />
          <span className="places">{place}</span>
          <span className="description">
            New York City comprises 5 boroughs sitting where the Hudson River
            meets the Atlantic Ocean. At its core is Manhattan, a densely
            populated borough that’s among the world’s major commercial,
            financial and cultural centers. Its iconic sites include skyscrapers
            such as the Empire State Building and sprawling Central Park.
            Broadway theater is staged in neon-lit Times Square.
          </span>
        </div>
        <div className="section-navigators">
          {/* TODO: Style buttons */}
          <Link to="#">What to do</Link>
          <Link to="#">Where to eat</Link>
          {/* TODO: Later developemts */}
          {/* <Link to="#">Where to stay</Link> */}
        </div>
        {/* <div className="category-section">
          <div>Categories section</div>
        //   TODO: Other section for later in developemt
        </div> */}
        <div>Top Places to visit</div>
        <PlacesCard
          id={1}
          Name={"Central Park"}
          description={
            "Central Park is a breathtaking green sanctuary nestled in the bustling heart of New York City, offering an escape from the urban hustle. Established in 1857, this iconic park spans over 800 acres, making it larger than London's Hyde Park. Visitors can meander along scenic walking paths and expansive lawns while discovering a plethora of attractions. From the enchanting Alice in Wonderland statue to Belvedere Castle perched on Vista Rock, every corner reveals something new."
          }
        />
        <div>Top Places to eat</div>
        {/* Todo: Hotel Bookings and prices */}
        {/* <div>Places to stay</div> */}
        {/* Todo: Top Travel Guides for Location*/}
        {/* <div>Featured Guides articles links</div> */}
        {/*  Todo: Weather Like per months*/}
        {/* <div>List of "Weather in {place} in {month}"</div> */}
        {/* Todo: Nearby places */}
        {/* <div>List of places</div> */}
      </div>
    </>
  );
}
