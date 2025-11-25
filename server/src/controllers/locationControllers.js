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
    `https://api.unsplash.com/search/photos?query=${id}&client_id=11lkTLGt98NxDpoNDDbmBY0iY5LFr9qec_xVB3Uq4kY`
  );
  const Descriptions = await getDetail(id);
  //   return res.json(Descriptions);
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
    return res
      .status(500)
      .json({ error: "Wikipedia request failed", details: error.message });
  }
};

// Descriptions:
("https://en.wikipedia.org/api/rest_v1/page/summary/${city}");
