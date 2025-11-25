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
  const { location } = req.params;
  const imagesUrl = `https://api.unsplash.com/search/photos?query=${location}&client_id=11lkTLGt98NxDpoNDDbmBY0iY5LFr9qec_xVB3Uq4kY`;
  const Images = await axios.get(imagesUrl, {
    params: {
      limit: 10,
      offset: 0,
      types: "CITY",
      namePrefix: location,
    },
  });
  const imageArray = Images.results.map((item) => item.urls.regular);
  return res.json(imageArray);
};
// Pictures:
("https://api.unsplash.com/search/photos?query=${city}&client_id=11lkTLGt98NxDpoNDDbmBY0iY5LFr9qec_xVB3Uq4kY");
// Descriptions:
("https://en.wikipedia.org/api/rest_v1/page/summary/${city}");
