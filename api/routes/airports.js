import express from "express";
import {getAirports} from "../controllers/airport.js";
import {addAirport} from "../controllers/airport.js";

const router = express.Router();

router.get("/getAirports", getAirports);
router.post("/addAirport", addAirport);
export default router;