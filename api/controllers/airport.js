import {db} from "../db.js";

export const getAirports = (request, response) => {
    const airportQuery = "SELECT * FROM airport ORDER BY name ASC";

    db.query(airportQuery, [], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })
}

export const addAirport = (request, response) => {
    const insertAirport = "INSERT INTO airport(`code`,`name`,`city`,`country`,`airport_type`) VALUES (?,?,?,?,?)";
    const values = [
        request.body.code,
        request.body.name,
        request.body.city,
        request.body.country,
        request.body.airport_type
    ]
    db.query(insertAirport, values, (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json("Airport");
    })

}