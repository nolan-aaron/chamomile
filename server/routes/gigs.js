import express from "express";
import { getUpcomingGigs } from "../controllers/gigs.js";

const router = express.Router();

router.get("/:band", getUpcomingGigs);

export default router;