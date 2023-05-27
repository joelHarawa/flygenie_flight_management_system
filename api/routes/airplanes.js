import express from "express";
import {addAirplane} from "../controllers/airplane.js";

const router = express.Router();

router.post("/addAirplane", addAirplane);
export default router;