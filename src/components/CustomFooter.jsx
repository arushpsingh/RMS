import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: "flex",
                padding: 5,
                justifyContent: "space-around",
                textAlign: "center",
                backgroundColor: "#333", // Add your desired background color
                color: "#fff", // Add your desired text color
            }}
        >
            <Box>
                <Typography variant="h4">
                    Welcome to Resource Manager
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Mollitia, nostrum!
                </Typography>
            </Box>
            <Box>
                <Typography variant="h4">Important Links</Typography>
                <Link href="https://www.facebook.com" color="inherit">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ color: "#1877f2" }}
                    >
                        <FacebookIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.youtube.com" color="inherit">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ color: "#ff0000" }}
                    >
                        <YouTubeIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com" color="inherit">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ color: "#0a66c2" }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
