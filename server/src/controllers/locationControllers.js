import axios from "axios";

export const searchResults = async (req, res) => {
  try {
    const { location } = req.query;

    if (!location || typeof location !== "string") {
      return res.status(400).json({ error: "Location is required" });
    }

    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/places`;

    const response = await axios.get(url, {
      params: {
        limit: 10,
        offset: 0,
        types: "CITY",
        namePrefix: location,
      },
    });

    return res.json(response.data.data);
  } catch (error) {
    console.error("GeoDB API error:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to fetch search results from GeoDB API" });
  }
};

export const locationDetail = async (req, res) => {
  const { id } = req.query;
  const Images = await axios.get(
    `https://api.unsplash.com/search/photos?query=${id}&client_id=${process.env.unsplash_Access_Key}`
  );
  const Descriptions = await getDetail(id);

  const imageArray = Images.data.results.map((item) => item.urls.regular);
  return res.json({ description: Descriptions, images: imageArray });
};
const getDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${id}`,
      {
        headers: {
          "User-Agent":
            "TravelGuide/1.0 (https://yourwebsite.com contact: your@email.com)",
          Accept: "application/json",
        },
      }
    );

    return response.data.extract;
  } catch (error) {
    console.error("WIKIPEDIA ERROR:", error);
    return null;
  }
};
export const getAttractions = async (req, res) => {
  try {
    const { lon, lat, radius = 3000 } = req.query;
    console.log("Attractions: ", { lon, lat, radius });

    const results = await axios.get(
      `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},${radius}&limit=20&apiKey=${process.env.Geoapify_API_Key}`
    );
    console.log("Results: ", results);
    const attractionsArray = results.data.features.map(
      (attraction) => attraction.properties.name
    );
    const attractions = [];

    for (const name of attractionsArray) {
      try {
        const details = await attractionDetail(name);
        attractions.push({
          name,
          details,
        });
      } catch (detailError) {
        console.error(
          `Failed to fetch details for: ${name}`,
          detailError.message
        );
      }
    }
    return res.json({ attractions });
  } catch (error) {
    console.error(
      "GET ATTRACTIONS ERROR:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      error: "Failed to retrieve attractions",
      details: error.response?.data || error.message,
    });
  }
};

export const attractionDetail = async (id) => {
  const Images = await axios.get(
    `https://api.unsplash.com/search/photos?query=${id}&client_id=${process.env.unsplash_Access_Key}`
  );
  const Descriptions = await getDetail(id);

  const imageArray = Images.data.results.map((item) => item.urls.regular);
  return { description: Descriptions, images: imageArray };
};
