import React, {useContext} from "react";
import Navbar from "../components/StaffNavbar";
import styled from "styled-components";
import {AuthContext} from "../context/authContext";
import Search from "../components/FlightSearch";
import AddFlight from "../components/AddFlight";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";

const Container = styled.div`
    height: 60px
`;

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Center = styled.div`
    padding-top: 50px;
    flex: 1;
    text-align: left;
    justify-content: space-between;
`;

const Left = styled.div`
    padding-bottom: 50px;
    flex: 1;
    text-align: center;
    justify-content: space-between;
`;

const Right = styled.div`
    flex: 1;
    text-align: center;
    justify-content: space-between;
`;

const Greeting = styled.h2`
    padding-bottom: 150px;
`;

const Info = styled.h3`
    padding-top: 50px;
    padding-bottom: 20px;
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

const StaffProfile = () => {
    const {currentStaff} = useContext(AuthContext);
    console.log(currentStaff.airline_name);
    const [flights, setFlights] = useState([]);

    useEffect(() => {

        const getStaffFlights = async () => {
            try {
                const response = await axios.get(`/flight/getStaffFlights?airline_name=${currentStaff.airline_name}`);
                console.log(response.data);
                setFlights(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        getStaffFlights();
    }, [])

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Left>
                        <Greeting>Hello, {currentStaff ? currentStaff.first_name : 'Guest'}</Greeting>
                    </Left>
                    <Center>
                        <Info>Next {currentStaff.airline_name} Flights</Info>
                        <UList>
                            {flights.map((flight) => (
                                <List key={flight.flight_no}>
                                    <Flight to={`/flight?flNo=${flight.flight_no}&from=${flight.departure_airport}&to=${flight.arrival_airport}&day=${flight.departure_date}&time=${flight.departure_time}`}>
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
                    </Center>
                    <Right></Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default StaffProfile;