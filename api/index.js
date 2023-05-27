import express from "express";
import authRoutes from "./routes/auth.js";
import airportRoutes from "./routes/airports.js";
import flightRoutes from "./routes/flights.js";
import ticketRoutes from "./routes/tickets.js";
import airlineRoutes from "./routes/airlines.js";
import airplaneRoutes from "./routes/airplanes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/airport", airportRoutes);
app.use("/api/flight", flightRoutes);
app.use("/api/ticket", ticketRoutes);
app.use("/api/airline", airlineRoutes);
app.use("/api/airplane", airplaneRoutes);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(4000,()=>{
    console.log("Connected!");
});