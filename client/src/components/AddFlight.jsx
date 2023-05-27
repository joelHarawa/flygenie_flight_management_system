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
  color: grey;
  font-size: 13px;
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


const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid;
`;


const AddFlight = () => {
    const [flightDetails, setFlightDetails] = useState({
        flight_no:"",
        departure_time:"",
        departure_date:"",
        departure_airport:"",
        arrival_time:"",
        arrival_date:"",
        arrival_airport:"",
        airplane_id:"",
        airline_name:"",
        status:""
    });

    const handleChange = e => {
        setFlightDetails(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        {
            try {
                const response = await axios.post("/flight/addFlight", flightDetails);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <form>
                <Bar>
                    <Input required type="text" placeholder="flight no." name="flight_no" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    departure time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Input required type="time" name="departure_time" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    departure date &nbsp; &nbsp; &nbsp;
                    <Input required type="date" name="departure_date" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="departure airport" name="departure_airport" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    arrival time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Input required type="time" name="arrival_time" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    arrival date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Input required type="date" name="arrival_date" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="arrival airport" name="arrival_airport" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="airplane ID" name="airplane_id" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="airline_name" name="airline_name" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="status" name="status" size="40" onChange={handleChange}/>
                </Bar>
                <Button onClick={handleSubmit}>Register</Button>

            </form>

        </div>

    );

}

export default AddFlight;