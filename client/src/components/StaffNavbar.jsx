import React, {useContext} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import {AuthContext} from "../context/authContext";

const Container = styled.div`
    height:60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    color: black;
    &:hover {
      color: grey;
    }
`;


const Navbar = () => {
    const {staffLogout} = useContext(AuthContext);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuItem to="/addflight">Add Flight</MenuItem>
                    <MenuItem to="/addairport">Add Airport</MenuItem>
                    <MenuItem to="/addairplane">Add Airplane</MenuItem>
                </Left>
                <Center>
                    <Logo to="/">FlyGenie</Logo>
                </Center>
                <Right>
                    <MenuItem to="/" onClick={staffLogout} >Log Out</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;