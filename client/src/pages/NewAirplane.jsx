import React from "react";
import Navbar from "../components/StaffNavbar";
import styled from "styled-components";
import AddAirplane from "../components/AddAirplane";

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
    padding-top: 50px;
    text-align: center;
  
    justify-content: space-between;
`;

const Left = styled.div`
    padding-bottom: 250px;
    flex: 1;
    text-align: right;
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


const NewAirport = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Left>
                        <h3> Add Airplane</h3>
                    </Left>
                    <Center>
                        <AddAirplane/>
                    </Center>
                    <Right></Right>
                </Wrapper>
            </Container>

        </div>
    );
}

export default NewAirport;