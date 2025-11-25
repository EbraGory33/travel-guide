import express from "express";

import {
  searchResults,
  locationDetail,
  getAttractions,
} from "../controllers/locationControllers.js";

const router = express.Router();

router.get("/search", searchResults);
router.get("/detail", locationDetail);
router.get("/attractions", getAttractions);

export default router;
