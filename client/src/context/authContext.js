import {createContext, useEffect, useState} from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentCustomer, setCustomer] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [currentStaff, setStaff] = useState(JSON.parse(localStorage.getItem("staff")) || null)
    const login = async (inputs) => {
        const response = await axios.post("/auth/login", inputs);
        setCustomer(response.data);
    }

    const logout = async (inputs) => {
        const response = await axios.post("/auth/logout", inputs);
        setCustomer(null);
    }

    const staffLogin = async (inputs) => {
        const response = await axios.post("/auth/staffLogin", inputs);
        setStaff(response.data);
    }

    const staffLogout = async (inputs) => {
        const response = await axios.post("/auth/staffLogout", inputs);
        setStaff(null);
    }

    useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentCustomer));
    }, [currentCustomer])

    useEffect(() => {
        localStorage.setItem("staff", JSON.stringify(currentStaff));
    }, [currentStaff])

    return (
        <AuthContext.Provider value={{currentCustomer, login, logout, currentStaff, staffLogin, staffLogout}}>
            {children}
        </AuthContext.Provider>
        );
}