import React, {useContext} from "react";
import axios from "axios";
import {useState} from "react";
import {AuthContext} from "../context/authContext";
import {useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const UList = styled.ul`
    margin: 0;
    padding-left: 0;
    padding-top: 20px;
`;

const List = styled.li`
    border: 1px solid black;
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 3px;
    text-align: left;
`;

const FlightList = () => {
    const {currentCustomer} = useContext(AuthContext);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get(`/ticket/getTicketPurchases?email=${currentCustomer.email}`);
                setTickets(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFlights();
    })

    // const cancelFlight = () => {
    //     try {
    //         //const response = await
    //     }
    // }

    return (
        <UList>
            {tickets.map((ticket) => (
                <List key={ticket.ticket_id}>
                    <div>{ticket.airline_name} {ticket.flight_no}</div>
                    <div>Departure: {ticket.departure_airport} {ticket.departure_time} {new Date(ticket.departure_date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}</div>
                    <div>Arrival: {ticket.arrival_airport} {ticket.arrival_time} {new Date(ticket.arrival_date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}</div>
                    <div>Total: ${ticket.price}</div>
                    <Link>Cancel</Link>
                </List>
            ))}
        </UList>
    );
}

export default FlightList;