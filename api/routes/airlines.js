import express from "express";
import {getAirlines} from "../controllers/airline.js";

const router = express.Router();

router.get("/", getAirlines);

export default router;