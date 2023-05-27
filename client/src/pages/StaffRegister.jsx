import React, {useEffect} from "react";
import styled from "styled-components";
import {useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

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

const Select = styled.select`
    padding: 5px;
    width: 270px;
`;

const StaffRegister = () => {
    //read email and password inputs from the user
    const [airlines, setAirlines] = useState([]);
    const [myAirline, setMyAirline] = useState([]);
    const [inputs, setInputs] = useState({
        user_name: "",
        password:"",
        first_name:"",
        last_name:"",
        email:"",
        date_of_birth:"",
        airline_name:""
    });
    useEffect(() => {
        const getAirlines = async () => {
            try {
                const response = await axios.get("/airline");
                console.log(response.data);
                setAirlines(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        getAirlines()
    }, []);

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleAirlineChange = (e) => {
        const selectedAirline = e.target.value;
        setMyAirline(selectedAirline);
        setInputs((prev) => ({ ...prev, airline_name: selectedAirline }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post("/auth/staffRegister", inputs);
            console.log(response);

        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Center>
                        <h2>Register</h2>
                        <form>
                            <Bar>
                                <Input required type="text" placeholder="username" name="username" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="password" placeholder="password" name="password" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="first name" name="first_name" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="last name" name="last_name" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="email" placeholder="email" name="email" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                date of birth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Input required type="date" placeholder="date of birth" name="date_of_birth" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Select value={myAirline} onChange={handleAirlineChange}>
                                    <option value="" disabled selected>airline</option>

                                    {airlines.map ((airline) => (
                                        <option key={airline.airline_name} value={airline.airline_name}>{airline.airline_name}</option>
                                    ))}
                                </Select>
                            </Bar>
                            <Button onClick={handleSubmit}>Register</Button>
                        </form>
                    </Center>
                </Wrapper>
            </Container>
        </div>
    );

}

export default StaffRegister;