import { Box, Typography } from "@mui/material";
import React from "react";

const Resourc = ({ resource }) => {
    return (
        <>
            <Box>
                <Typography variant="h6">
                    First Name:{resource?.firstname}
                </Typography>
                <Typography variant="h6">
                    Last Name: {resource?.lastname}
                </Typography>
                <Typography variant="h6">Email: {resource?.email}</Typography>
                <hr />
                <hr />
            </Box>
        </>
    );
};

export default Resourc;
