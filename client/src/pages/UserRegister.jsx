import React from "react";
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

const UserRegister = () => {
    //read email and password inputs from the user
    const [inputs, setInputs] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        apartment_no:"",
        building_no:"",
        street_name:"",
        city:"",
        state:"",
        zipcode:"",
        passport_expiration:"",
        passport_country:"",
        date_of_birth:""
    });
    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post("/auth/register", inputs);
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
                            <Input required type="text" placeholder="first name" name="first_name" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                            <Input required type="test" placeholder="last name" name="last_name" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                            <Input required type="email" placeholder="email" name="email" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                            <Input required type="password" placeholder="password" name="password" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="apartment no." name="apartment_no" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="building no." name="building_no" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="street name" name="street_name" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="city" name="city" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="state" name="state" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="zipcode" name="zipcode" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                passport expiration &nbsp;
                                <Input required type="date" placeholder="passport exp" name="passport_expiration" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="text" placeholder="passport country" name="passport_country" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                date of birth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Input required type="date" placeholder="date of birth" name="date_of_birth" size="40" onChange={handleChange}/>
                            </Bar>

                            <Button onClick={handleSubmit}>Register</Button>
                     </form>
                    </Center>
                </Wrapper>
            </Container>
        </div>
    );

}

export default UserRegister;