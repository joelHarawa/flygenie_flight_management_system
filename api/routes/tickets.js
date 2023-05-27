import express from "express";
import {getTickets} from "../controllers/ticket.js";
import {buyTicket} from "../controllers/ticket.js";
import {getTicketPurchases} from "../controllers/ticket.js";

const router = express.Router();

router.get("/getTickets", getTickets);
router.post("/buyTicket", buyTicket);
router.get("/getTicketPurchases", getTicketPurchases);

export default router;