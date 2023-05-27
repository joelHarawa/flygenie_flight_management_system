import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  align-items: flex-start;
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
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuItem to="/staffregister">Staff Register</MenuItem>
                    <MenuItem to="/stafflogin">Staff Log In</MenuItem>
                </Left>
                <Center>
                    <Logo to="/">FlyGenie</Logo>
                </Center>
                <Right>
                    <MenuItem to="/register">Register</MenuItem>
                    <MenuItem to="/login">Log In</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;