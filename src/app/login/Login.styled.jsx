import styled from "@emotion/styled";
import { Box, InputLabel, TextField } from "@mui/material";

export const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

export const StyledForm = styled("form")`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 2rem;
    & > div {
        margin-bottom: 1rem;
    }
`;

export const StyledInputLabel = styled(InputLabel)`
    margin-bottom: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
`;
