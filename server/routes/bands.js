import express from "express";
import { getSimilarBands } from "../controllers/bands.js";

const router = express.Router();

router.get("/:bandName", getSimilarBands);

export default router;