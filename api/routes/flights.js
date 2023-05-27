import express from "express";
import {getFlights, getStaffFlights} from "../controllers/flight.js";
import {addFlight} from "../controllers/flight.js";

const router = express.Router();

router.get("/getFlights", getFlights);
router.post("/AddFlight", addFlight);
router.get("/getStaffFlights", getStaffFlights);

export default router;