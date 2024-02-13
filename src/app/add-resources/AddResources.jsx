"use client";
import { Button, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import {
    StyledBox,
    StyledButtonBox,
    StyledForm,
    StyledInputLabel,
    StyledTextField,
} from "./AddResources.styled";
import { addResource } from "@/service/resourceService";
import { toast } from "react-toastify";
import UserContext from "@/context/UserContext";

const AddResources = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [userId, setUserId] = useState("");

    const context = useContext(UserContext);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addResource({
                firstname: firstname,
                lastname: lastname,
                email: email,
                userId: context.user._id,
            });
            toast.success("Resource added successfully", {
                position: "top-right",
            });
            setFirstname("");
            setLastname("");
            setEmail("");
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 409) {
                // 409 Conflict status code for duplicate key violation
                toast.error("Email is already in use", {
                    position: "top-right",
                });
            } else {
                console.error("Resource not added:", error);
                toast.error("Signup failed", {
                    position: "top-right",
                });
            }
            throw error;
        }
    };

    const handleClear = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
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
            {" "}
            <Typography variant="h3" sx={{ m: 2 }} gutterBottom>
                Add Resource
            </Typography>
            <StyledForm onSubmit={handleFormSubmit}>
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
                <StyledButtonBox>
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                    <Button variant="contained" onClick={handleClear}>
                        Clear
                    </Button>
                </StyledButtonBox>
            </StyledForm>
        </StyledBox>
    );
};

export default AddResources;
