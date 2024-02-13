"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`;

export default function ButtonAppBar() {
    const context = useContext(UserContext);
    const user = context.user;
    const router = useRouter();

    const logout = async () => {
        try {
            const response = await axios.post("/api/logout");
            console.log(response);
            context.setUser(undefined);
            router.push("/");
        } catch (error) {
            console.error(error);
            toast.error("Logout error");
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <StyledLink href={"/"}>Resource Manager</StyledLink>
                    </Typography>
                    {context.user && (
                        <>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <HomeIcon />
                                </IconButton>
                                <Typography
                                    sx={{ mr: 1 }}
                                    variant="h6"
                                    component="div"
                                >
                                    <StyledLink href={"/"}>Home</StyledLink>
                                </Typography>

                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <AddIcon />
                                </IconButton>
                                <Typography
                                    sx={{ mr: 1 }}
                                    variant="h6"
                                    component="div"
                                >
                                    <StyledLink href={"/add-resources"}>
                                        Add Resource
                                    </StyledLink>
                                </Typography>

                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <VisibilityIcon />
                                </IconButton>
                                <Typography
                                    sx={{ mr: 1 }}
                                    variant="h6"
                                    component="div"
                                >
                                    <StyledLink href={"/show-resources"}>
                                        Show Resource
                                    </StyledLink>
                                </Typography>
                            </Box>
                        </>
                    )}

                    {!context.user && (
                        <>
                            <StyledLink href={"/login"}>
                                <Button color="inherit">Login</Button>
                            </StyledLink>
                            <StyledLink href={"/sign-up"}>
                                <Button color="inherit">Sign up</Button>
                            </StyledLink>
                        </>
                    )}

                    {context.user && (
                        <>
                            <StyledLink href={"#"}>
                                <Button color="inherit">
                                    {user?.user?.firstname}
                                </Button>
                            </StyledLink>
                            <StyledLink href={"#"}>
                                <Button color="inherit" onClick={logout}>
                                    Logout
                                </Button>
                            </StyledLink>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
