'use client'
import React from "react";
import { StyledContainer, StyledContent, StyledLoginUserContent, StyledText } from "./LoginUser.styled";


const LoginUser = () => {
  return (
    <StyledContainer>
      <StyledText variant="h4">Welcome to Resource Management System</StyledText>
      <StyledContent>
        You can add a resource by clicking the "Add Resource" button above.
      </StyledContent>
      
    </StyledContainer>
  );
};

export default LoginUser;
