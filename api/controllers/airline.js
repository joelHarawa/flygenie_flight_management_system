import {db} from "../db.js";

export const getAirlines = (request, response) => {
    const airportQuery = "SELECT * FROM airline ORDER BY airline_name ASC";

    db.query(airportQuery, [], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })
}