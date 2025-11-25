import { useState } from "react";
import { searchResults } from "../services/searchs.ts";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const fetchSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === "") return;
    console.log(e.target.value);

    const data = await searchResults(e.target.value);
    setResults(data);
  };
  const selectedSearch = (location: string) => {
    navigate(`/Explorer/${encodeURIComponent(location)}`);
  };
  console.log(results);
  return (
    <>
      <div className="header-input relative">
        <img
          className="search-icon"
          src="/search.svg"
          alt="Search Icon"
          height={24}
          width={24}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Enter place"
          onChange={fetchSearch}
        />
        {results && results.length > 0 && (
          <div className="search-results">
            <p>Search Results</p>
            <ul>
              {results.map((location: any) => (
                <li
                  key={location.id}
                  onClick={() => {
                    selectedSearch(location.name), setResults([]);
                  }}
                >
                  <p>
                    {location.name}, {location.regionCode}, {location.country}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
