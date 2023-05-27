import React, {useContext} from "react";
import Navbar from "../components/ProfileNavbar";
import styled from "styled-components";
import {AuthContext} from "../context/authContext";
import Search from "../components/FlightSearch";
import Tickets from "../components/FlightList";
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
    padding-bottom: 150px;
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



const Profile = () => {
    const {currentCustomer} = useContext(AuthContext);

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Left>
                        <Greeting>Hello, {currentCustomer ? currentCustomer.first_name : 'Guest'}</Greeting>
                    </Left>
                    <Center>
                        <Info>Add Flight</Info>
                        <Search/>
                        <Info>Your Flights</Info>
                        <Tickets/>
                    </Center>
                <Right>
                </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Profile;