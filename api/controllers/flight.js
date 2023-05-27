import {db} from "../db.js";


export const getStaffFlights = (request, response) => {
    const airline = request.query.airline_name;
    console.log("getting staff flights");
    console.log(request.query.airline_name);
    const airlineQuery = "SELECT * FROM flight WHERE airline_name = ?";
    db.query (airlineQuery, [airline], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })

}
export const getFlights = (request, response) => {
    const fromAirport = request.query.from;
    const toAirport = request.query.to;
    const flightQuery =
        "SELECT * FROM flight WHERE departure_airport = ? AND arrival_airport = ?";


    db.query(flightQuery, [fromAirport, toAirport], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })
}

export const addFlight = (request, response) => {
    const insertFlight = "INSERT INTO flight(`flight_no`,`departure_time`,`departure_date`,`departure_airport`,`arrival_time`,`arrival_date`,`arrival_airport`,`airplane_id`,`airline_name`,`status` ) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const values = [
        request.body.flight_no,
        request.body.departure_time,
        request.body.departure_date,
        request.body.departure_airport,
        request.body.arrival_time,
        request.body.arrival_date,
        request.body.arrival_airport,
        request.body.airplane_id,
        request.body.airline_name,
        request.body.status

    ]
    db.query(insertFlight, values, (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json("Flight");
    })

}