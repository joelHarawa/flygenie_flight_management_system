import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (request, response) => {
    const customerQuery = "SELECT * from customer WHERE email = ?";

    db.query(customerQuery, [request.body.email, ], (error, data) => {
        if (error) return response.json(error);
        const insertCustomer = "INSERT INTO customer(`first_name`, `last_name`, `email`, `password`, `apartment_no`, `building_no`,`street_name`, `city`, `state`, `zip_code`, `passport_expiration`, `passport_country`, `date_of_birth`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const values = [
            request.body.first_name,
            request.body.last_name,
            request.body.email,
            request.body.password,
            request.body.apartment_no,
            request.body.building_no,
            request.body.street_name,
            request.body.city,
            request.body.state,
            request.body.zipcode,
            request.body.passport_expiration,
            request.body.passport_country,
            request.body.date_of_birth
        ];
        console.log(request.body.passport_expiration);

        db.query(insertCustomer, values, (error, data) => {
            if (error) return response.json(error);
            return response.status(200).json("User");
        })
    });
}

export const staffRegister = (request, response) => {
    const staffQuery = "SELECT * from staff WHERE username = ?";

    db.query(staffQuery, [request.body.username, ], (error, data) => {
        if (error) return response.json(error);
        const insertStaff = "INSERT INTO staff(`username`, `password`,`first_name`, `last_name`, `email`, `date_of_birth`, `airline_name`) VALUES (?,?,?,?,?,?,?)";
        const values = [
            request.body.username,
            request.body.password,
            request.body.first_name,
            request.body.last_name,
            request.body.email,
            request.body.date_of_birth,
            request.body.airline_name
        ];

        db.query(insertStaff, values, (error, data) => {
            if (error) return response.json(error);
            return response.status(200).json("Staff");
        })
    });
}

export const login = (request, response) => {
    const emailQuery = "SELECT * FROM customer WHERE email = ?";

    db.query(emailQuery,[request.body.email], (error, data) => {
        if (error) return response.json(error);
        if(data.length === 0) return response.status(404).json("User not found!");

        let checkPassword = 0;
        if (request.body.password === data[0].password) {
            checkPassword = 1;
        }

        if (!checkPassword) return response.status(400).json("Wrong password or email.");
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];
        console.log(checkPassword);
        response.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other);
    });

}

export const logout = (request, response) => {
    response.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out.")
}

export const staffLogout = (request, response) => {
    response.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("Staff has been logged out.")
}


export const staffLogin = (request, response) => {
    const usernameQuery = "SELECT * FROM staff WHERE username = ?";
    console.log(request.body.username);

    db.query(usernameQuery,[request.body.username], (error, data) => {
        if (error) return response.json(error);
        if(data.length === 0) return response.status(404).json("User not found!");

        let checkPassword = 0;
        if (request.body.password === data[0].password) {
            checkPassword = 1;
        }
        if (!checkPassword) return response.status(400).json("Wrong password or email.");
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];
        console.log(checkPassword);
        response.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other);
    });
}
