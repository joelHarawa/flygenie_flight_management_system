import {db} from "../db.js";

export const getTicketPurchases = (request, response) => {
    const email = request.query.email;
    const purchaseQuery = "SELECT * FROM ticket WHERE email = ?";

    db.query(purchaseQuery, [email], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })
}

export const getTickets = (request, response) => {
    const flNo = request.query.flNo;
    const from = request.query.from;
    const to = request.query.to;
    const day = request.query.day;
    const time = request.query.time;
    console.log(day);
    console.log(time);
    console.log("the ticket query is working");
    const ticketQuery =
        "SELECT * FROM ticket WHERE flight_no = ?";

    db.query(ticketQuery, [flNo], (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    })
}

export const buyTicket = (request, response) => {
    const updateTicket = "UPDATE ticket SET first_name=?, last_name=?, date_of_birth=?, card_no=?, name_on_card=?, expiration_date=?, card_type=?, email=?, price=? WHERE ticket_id=?";
    const values = [
        request.body.first_name,
        request.body.last_name,
        request.body.date_of_birth,
        request.body.card_no,
        request.body.name_on_card,
        request.body.expiration_date,
        request.body.card_type,
        request.body.email,
        request.body.price,
        request.body.ticket_id
    ];

    db.query(updateTicket, values, (error, data) => {
        if (error) return response.json(error);
        return response.status(200).json(data);
    });
}
