"use client";
import UserContext from "@/context/UserContext";
import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Resourc from "./Resource";
import { getUserResources } from "@/service/resourceService";

const ShowResources = () => {
    const [userResources, setUserResources] = useState([]);
    const { user } = useContext(UserContext);
    const userId = user?.user?._id;

    const loadTask = async (userId) => {
        try {
            const resour = await getUserResources(userId);
            setUserResources([...resour]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log("user", user);
        if (userId) {
            loadTask(userId);
        }
    }, [ userId]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: 2,
            }}
        >
            <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
                Show Resource
            </Typography>
            {userResources.length > 0 ? (
                <Box>
                    Available Resources: {userResources.length}
                    <Box>
                        <Typography variant="h2">Resource Data</Typography>
                    </Box>
                    {userResources.map((resource) => (
                        <Resourc key={resource._id} resource={resource} />
                    ))}
                </Box>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
};

export default ShowResources;
