"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import {
    StyledBox,
    StyledBoxButton,
    StyledForm,
    StyledInputLabel,
    StyledTextField,
} from "./Signup.styled";
import { toast } from "react-toastify";
import { signUp } from "@/service/UserService";

const Signup = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname) {
            toast.warning("First name is required", {
                position: "top-right",
            });
            return;
        }
        if (!lastname) {
            toast.warning("Last name is required", {
                position: "top-right",
            });
            return;
        }
        if (!email) {
            toast.warning("Email is required", {
                position: "top-right",
            });
            return;
        }
        if (!password) {
            toast.warning("Password is required", {
                position: "top-right",
            });
            return;
        }

        try {
            const response = await signUp({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            });
            toast.success("Signup successfull", {
                position: "top-right",
            });
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // 409 Conflict status code for duplicate key violation
                toast.error("Email is already in use", {
                    position: "top-right",
                });
            } else {
                console.error("Error in signUp:", error);
                toast.error("Signup failed", {
                    position: "top-right",
                });
            }
            throw error;
        }
    };

    const resetForm = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
    };

    return (
        <StyledBox
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: 2,
            }}
        >
            <Typography variant="h3" sx={{ m: 2 }} gutterBottom>
                Sign up
            </Typography>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputLabel required htmlFor="first_name">
                    First Name
                </StyledInputLabel>
                <StyledTextField
                    size="small"
                    id="first_name"
                    placeholder="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                />
                <StyledInputLabel required htmlFor="last_name">
                    Last Name
                </StyledInputLabel>
                <StyledTextField
                    size="small"
                    id="last_name"
                    placeholder="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                />
                <StyledInputLabel required htmlFor="email_address">
                    Email address
                </StyledInputLabel>
                <StyledTextField
                    size="small"
                    id="email_address"
                    placeholder="Email address"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <StyledInputLabel required htmlFor="password">
                    Password
                </StyledInputLabel>
                <StyledTextField
                    size="small"
                    id="password"
                    placeholder="Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <StyledBoxButton>
                    <Button variant="contained" type="submit">
                        Sign up
                    </Button>
                    <Button variant="contained" onClick={resetForm}>
                        Reset
                    </Button>
                </StyledBoxButton>
            </StyledForm>
        </StyledBox>
    );
};

export default Signup;
