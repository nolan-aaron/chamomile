import express from "express";
import { getTopTracks } from "../controllers/tracks.js";

const router = express.Router();

router.get("/:band", getTopTracks);

export default router;