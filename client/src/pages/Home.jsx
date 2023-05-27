import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Search from "../components/FlightSearch";

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

const Info = styled.h3`
    padding-top: 50px;
    padding-bottom: 20px;
`;


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Left></Left>
                    <Center>
                        <Info>Search  Flights</Info>
                        <Search/>
                    </Center>
                    <Right></Right>
                </Wrapper>
            </Container>
        </div>
    )
}
export default Home;