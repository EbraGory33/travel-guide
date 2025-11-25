import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlacesCard } from "../components/Layout";

const images = [
  "https://images.unsplash.com/photo-1664531685548-f77f1da7c010?ixid=M3w4MzUwMjR8MHwxfHNlYXJjaHwxfHxuZXcteW9yay1jaXR5fGVufDB8fHx8MTc2NDAxMTAxOXww&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401",
];

export default function Explorer() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  useEffect(() => {}, []);

  const [index, setIndex] = useState(0);
  const prev = () => {
    setIndex((i) => i - 1);
  };
  const next = () => {
    setIndex((i) => i + 1);
  };

  return (
    <>
      <div className="explorer-section">
        <div className="image-wrapper">
          <img
            // src="https://images.unsplash.com/photo-1664531685548-f77f1da7c010?ixid=M3w4MzUwMjR8MHwxfHNlYXJjaHwxfHxuZXcteW9yay1jaXR5fGVufDB8fHx8MTc2NDAxMTAxOXww&ixlib=rb-4.1.0"
            src={images[index]}
            alt=""
            className="h-[500px] w-[750px]"
          />
          {/* Overlay content */}
          <span className="places">{decodeURIComponent(id || "")}</span>
          <span className="description">
            New York City comprises 5 boroughs sitting where the Hudson River
            meets the Atlantic Ocean. At its core is Manhattan, a densely
            populated borough that’s among the world’s major commercial,
            financial and cultural centers. Its iconic sites include skyscrapers
            such as the Empire State Building and sprawling Central Park.
            Broadway theater is staged in neon-lit Times Square.
          </span>
          {/* Navigation arrows */}
          {index > 0 && (
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
            >
              ‹
            </button>
          )}

          {index < images.length - 1 && (
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
            >
              ›
            </button>
          )}
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
        <p className="top-places">Top Places to visit</p>
        <PlacesCard
          id={1}
          Name={"Central Park"}
          description={
            "Central Park is a breathtaking green sanctuary nestled in the bustling heart of New York City, offering an escape from the urban hustle. Established in 1857, this iconic park spans over 800 acres, making it larger than London's Hyde Park. Visitors can meander along scenic walking paths and expansive lawns while discovering a plethora of attractions. From the enchanting Alice in Wonderland statue to Belvedere Castle perched on Vista Rock, every corner reveals something new."
          }
        />

        <p className="top-places">Top Places to eat</p>
        <PlacesCard
          id={1}
          Name={"Central Park"}
          description={
            "Central Park is a breathtaking green sanctuary nestled in the bustling heart of New York City, offering an escape from the urban hustle. Established in 1857, this iconic park spans over 800 acres, making it larger than London's Hyde Park. Visitors can meander along scenic walking paths and expansive lawns while discovering a plethora of attractions. From the enchanting Alice in Wonderland statue to Belvedere Castle perched on Vista Rock, every corner reveals something new."
          }
        />
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
