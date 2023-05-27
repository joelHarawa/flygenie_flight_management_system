import React from "react";
import styled from "styled-components";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Select = styled.select`
    padding: 5px;
    width: 500px;
`;

const Wrapper = styled.div`
    padding-left: 200px;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
`;

const Bar = styled.div`
    padding: 10px 0px;
`;

const List = styled.li`
    cursor: pointer;
    border: 1px solid black;
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 3px;
    &:hover {
      color: white;
      background-color: black;
    }
`;

const Flight = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover {
      color: white;
    }
`;

const UList = styled.ul`
    margin: 0;
    padding-left: 0;
    padding-top: 20px;
`;
const Search = () => {
    const [airports, setAirports] = useState([]);
    const [fromAirport, setFromAirport] = useState("");
    const [toAirport, setToAirport] = useState("");
    const [flightResults, setFlightResults] = useState([]);

    const handleSearchFlights = async e => {
        e.preventDefault();
        try {
            const response = await axios.get(`/flight/getFlights?from=${fromAirport}&to=${toAirport}`);
            console.log(response.data);
            setFlightResults(response.data);


        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getAirports = async () => {
            try {
                const response = await axios.get("/airport/getAirports");
                console.log(response.data);
                setAirports(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        getAirports()
    }, []);

    return (
        <form>
        <Bar>
            <Select value={fromAirport} onChange={(e) => setFromAirport(e.target.value)}>
                <option value="" disabled selected>From...</option>

                {airports.map ((airport) => (
                    <option key={airport.code} value={airport.code}>{airport.name}, {airport.city}, {airport.country} ({airport.code})</option>
                ))}
            </Select>
        </Bar>
        <Bar>
            <Select value={toAirport} onChange={(e) => setToAirport(e.target.value)}>
                <option value="">To...</option>
                {airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>{airport.name}, {airport.city}, {airport.country} ({airport.code})</option>
                ))}
            </Select>
        </Bar>
            <Wrapper>
                <Button onClick={handleSearchFlights}>Search Flights</Button>
            </Wrapper>
            {flightResults.length > 0 && (
                <div>
                    <h3>Available Flights:</h3>
                    <UList>
                        {flightResults.map((flight) => (
                            <List key={flight.flight_no}>
                                <Flight to={`/purchase?flNo=${flight.flight_no}&from=${flight.departure_airport}&to=${flight.arrival_airport}&day=${flight.departure_date}&time=${flight.departure_time}`}>
                                <div>{flight.airline_name}</div>
                                <div>{flight.flight_no}</div>
                                <div>Departure: {flight.departure_airport} {flight.departure_time} {new Date(flight.departure_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}</div>
                                <div>Arrival: {flight.arrival_airport} {flight.arrival_time} {new Date(flight.arrival_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}</div>
                            </Flight>
                            </List>
                        ) )}
                    </UList>
                </div>
            )
            }
        </form>
    )
}

export default Search;