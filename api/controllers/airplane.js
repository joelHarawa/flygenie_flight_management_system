import {db} from "../db.js";

export const addAirplane = (request, response) => {
    const insertAirplane = "INSERT INTO airplane(`airplane_id`,`airline_name`,`no_of_seats`,`manufacturer`,`manufacturing_date`) VALUES (?,?,?,?,?)";
    const values = [
        request.body.airplane_id,
        request.body.airline_name,
        request.body.no_of_seats,
        request.body.manufacturer,
        request.body.manufacturing_date
    ]
    db.query(insertAirplane, values, (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json("Airplane");
    })

}