import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlacesCard } from "../components/Layout";
import { getDetails, getAttractions } from "../services/searchs";

interface location {
  lon: number;
  lat: number;
}

export default function Explorer({ lon, lat }: location) {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const details = async () => {
      const results = await getDetails(encodeURIComponent(id));
      setImages(results.images);
      setDescription(results.description);
      const radius = 3000;
      const attractionResults = await getAttractions({ lon, lat, radius });
      setAttractions(attractionResults);
    };
    details();
  }, [id]);
  console.log(description);

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
          <img src={images[index]} alt="" className="h-[500px] w-[750px]" />
          {/* Overlay content */}
          <span className="places">{id}</span>
          <span className="description">{description}</span>
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
          {/* <Link to="#">What to do</Link>
          <Link to="#">Where to eat</Link> */}
          {/* TODO: Later developemts */}
          {/* <Link to="#">Where to stay</Link> */}
        </div>
        {/* <div className="category-section">
          <div>Categories section</div>
        //   TODO: Other section for later in developemt
        </div> */}
        <p className="top-places">Top Places to visit</p>

        {attractions?.map((attraction, index) => (
          <PlacesCard
            key={index}
            id={index}
            Name={attraction.name}
            Images={attraction.details?.images || []}
            description={
              attraction.details?.description || "No description available."
            }
          />
        ))}

        {/* <p className="top-places">Top Places to eat</p>
        <PlacesCard
          id={1}
          Name={"Central Park"}
          description={
            "Central Park is a breathtaking green sanctuary nestled in the bustling heart of New York City, offering an escape from the urban hustle. Established in 1857, this iconic park spans over 800 acres, making it larger than London's Hyde Park. Visitors can meander along scenic walking paths and expansive lawns while discovering a plethora of attractions. From the enchanting Alice in Wonderland statue to Belvedere Castle perched on Vista Rock, every corner reveals something new."
          }
        /> */}
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
