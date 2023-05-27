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


const AddAirplane = () => {
    const [airplane, setAirplane] = useState({
        airplane_id:"",
        airline_name:"",
        no_of_seats:"",
        manufacturer:"",
        manufacturing_date:"",
    });

    const handleChange = e => {
        setAirplane(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        {
            try {
                const response = await axios.post("/airplane/addAirplane", airplane);
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
                    <Input required type="text" placeholder="airplane ID" name="airplane_id" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="airline_name" name="airline_name" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="no. of seats" name="no_of_seats" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="manufacturer" name="manufacturer" size="40" onChange={handleChange}/>
                </Bar>
                <Bar>
                    <Input required type="text" placeholder="manufacturing date" name="manufacturing_date" size="40" onChange={handleChange}/>
                </Bar>

                <Button onClick={handleSubmit}>Add Airplane</Button>

            </form>

        </div>

    );

}

export default AddAirplane;