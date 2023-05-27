import React from "react";
import {AuthContext} from "../context/authContext";
import Navbar from "../components/ProfileNavbar";
import styled from "styled-components";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {useLocation} from 'react-router-dom';


const Container = styled.div`
    height: 200px;
`;

const Wrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    justify-content: space-between;
    padding: 100px;
`;

const Left = styled.div`
    padding-bottom: 270px;
    flex: 1;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    text-align: center;
    justify-content: space-between;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid;
`;

const Button = styled.button`
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
`;

const Bar = styled.div`
    padding: 10px 0px;
    color: grey;
    font-size: 13px;
`;

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

const Purchase = () => {


    const [tickets, setTickets] = useState([]);
    const location = useLocation();

    useEffect(()=> {

        const flightDetails = new URLSearchParams(location.search);
        const flightNo = flightDetails.get("flNo");
        const fromAirport = flightDetails.get("from");
        const toAirport = flightDetails.get("to");
        const day = flightDetails.get("day");
        const time = flightDetails.get("time");

        const fetchTickets = async () => {
            try {
                const response = await axios.get(`/ticket/getTickets?flNo=${flightNo}&from=${fromAirport}&to=${toAirport}&day=${day}&time=${time}`);
                setTickets(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTickets();
    }, [location.search]) ;


    //store users purchase details for SQL ticket_purchase insert
    const [inputs, setInputs] = useState({
        ticket_id: tickets.length > 0 ? tickets[0].ticket_id :"",
        first_name:"",
        last_name:"",
        card_no:"",
        name_on_card:"",
        card_type:"",
        expiration_date:"",
        price: tickets.length > 0 ? tickets[0].price : "",
        email:"",
        date_of_birth:""
    });

    useEffect(() => {
        if (tickets.length > 0) {
            setInputs(prev => ({
                ...prev,
                ticket_id: tickets[0].ticket_id,
                price: tickets[0].price
            }));
        }
    }, [tickets]);

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }


    //submit the inputs to buyTicket to run SQL query
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post("ticket/buyTicket?", inputs);
            console.log(response);

        } catch(err) {
            console.log(error);
        }
    }
    return (
    <div>
        <Navbar/>
        <Container>
            <Wrapper>
                <Left>
                    <h2>Ticket Summary</h2>
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
                            </List>

                        ))}
                    </UList>


                </Left>
                <Center>
                    <h2>Purchase</h2>
                    <form>
                        <Bar>
                            <Input required type="text" placeholder="first name" name="first_name" size="40" onChange={handleChange}/>
                        </Bar>
                        <Bar>
                            <Input required type="text" placeholder="last name" name="last_name" size="40" onChange={handleChange}/>
                        </Bar>

                        <Bar>
                            <Input required type="text" placeholder="card number" name="card_no" size="40" onChange={handleChange}/>
                        </Bar>
                        <Bar>
                            <Input required type="text" placeholder="name on card" name="name_on_card" size="40" onChange={handleChange}/>
                        </Bar>

                        <Bar>
                            <Input required type="text" placeholder="card type (credit/debit)" name="card_type" size="40" onChange={handleChange}/>
                        </Bar>
                        <Bar>
                            <Input required type="email" placeholder="email" name="email" size="40" onChange={handleChange}/>
                        </Bar>
                        <Bar>
                            expiration date&nbsp; &nbsp; &nbsp; &nbsp;
                            <Input required type="date" placeholder="expiration date" name="expiration date" size="40" onChange={handleChange}/>
                        </Bar>
                        <Button onClick={handleSubmit}>Purchase</Button>
                    </form>
                </Center>
                <Right></Right>
            </Wrapper>
        </Container>
    </div>
    );
};

export default Purchase;