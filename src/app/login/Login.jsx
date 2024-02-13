"use client";
import React, { useState } from "react";
import {
    StyledBox,
    StyledForm,
    StyledInputLabel,
    StyledTextField,
} from "./Login.styled";
import { Button, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { login } from "@/service/UserService";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const context = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({
                email: email,
                password: password,
            });
            toast.success("Login successfull", {
                position: "top-right",
            });
            setEmail("");
            setPassword("");
            context.setUser(response.user);

            // redirect
            router.push("/profile/user");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, {
                position: "top-right",
            });
        }
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
                Login
            </Typography>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInputLabel required htmlFor="email_address">
                    Username
                </StyledInputLabel>
                <StyledTextField
                    size="small"
                    id="email_address"
                    placeholder="Username"
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
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </StyledForm>
        </StyledBox>
    );
};

export default Login;
