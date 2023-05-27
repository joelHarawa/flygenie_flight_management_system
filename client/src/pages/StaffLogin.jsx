import React, {useContext, useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

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

const Bar = styled.div`
    padding: 10px 0px;
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

const StaffLogin = () => {
    const [staffInputs, setStaffInputs] = useState({
        username:"",
        password:""
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {staffLogin} = useContext(AuthContext);

    const handleChange = e => {
        setStaffInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await staffLogin(staffInputs);
            navigate("/staffprofile");
            //const response = await axios.post("/auth/login", inputs);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Center>
                        <h2>Staff Log in</h2>
                        <form>
                            <Bar>
                                <Input required type="text" placeholder="username" name="username" size="40" onChange={handleChange}/>
                            </Bar>
                            <Bar>
                                <Input required type="password" placeholder="password" name="password" size="40" onChange={handleChange}/>
                            </Bar>
                            <Button onClick={handleSubmit}>Log in</Button>
                        </form>
                    </Center>
                </Wrapper>
            </Container>
        </div>
    );
}

export default StaffLogin;