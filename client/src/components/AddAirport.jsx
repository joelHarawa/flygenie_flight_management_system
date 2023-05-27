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


const AddAirport = () => {
    const [airport, setAirport] = useState({
        code:"",
        name:"",
        city:"",
        country:"",
        airport_type:"",
    });

    const handleChange = e => {
        setAirport(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        {
            try {
                const response = await axios.post("/airport/addAirport", airport);
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
                    <Input required type="text" placeholder="code" name="code" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="name" name="name" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="city" name="city" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="country" name="country" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="airport type (International/Domestic/Both)" name="airport_type" size="40" onChange={handleChange}/>
                </Bar>

                <Button onClick={handleSubmit}>Add Airport</Button>

            </form>

        </div>

    );

}

export default AddAirport;