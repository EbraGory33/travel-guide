import express from "express";

import {
  searchResults,
  locationDetail,
} from "../controllers/locationControllers.js";

const router = express.Router();

router.get("/search", searchResults);
router.get("/detail", locationDetail);

export default router;
