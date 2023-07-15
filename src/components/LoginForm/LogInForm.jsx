import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import StyledFormBlurBackground from "../Background/FormBlurBackground";
import ShoppingMan from "../ShoppingMan/ShoppingMan";
import styled from "styled-components";
import Section from "../StyledSection/StyledSection";
// import { Link } from "react-router-dom";

const StyledFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  height: auto;
  width: 100%;
  max-width: 408px;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 482px) {
    padding: 113px 20px 107px;
  }
  @media (min-width: 482px) {
    background-color: #fff;
    padding: 40px 60px 60px;
    margin-top: 50px;
  }
`;

const StyledBoxWithMainSVG = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 550px;
  padding-top: 60px;
  max-height: 600px;

  @media (max-width: 482px) {
    display: none;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LogInFormButton = styled(Button)`
  padding: 13px 0;
  border-radius: 20px !important;
  width: 100%;
  min-width: 280px;
  max-width: 300px;
`;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("kliknąłeś mnie");
};

const LogInForm = () => {
  return (
    <>
      <Section>
        <StyledBoxWithMainSVG component="div">
          <ShoppingMan />
          <Typography variant="header" style={{ fontWeight: 400 }}>
            Finance App
          </Typography>
        </StyledBoxWithMainSVG>
        <StyledFormBlurBackground>
          <StyledFormBox component="form" onSubmit={handleSubmit}>
            <Typography variant="header" style={{ marginBottom: "40px" }}>
              <Wallet style={{ paddingRight: "20px" }} />
              Wallet
            </Typography>
            <Input
              id="email"
              placeholder="Email"
              startAdornment={
                <InputAdornment position="start">
                  <EmailRoundedIcon color="icon" />
                </InputAdornment>
              }
              style={{ width: "100%", marginTop: "20px" }}
            />
            <Input
              id="password"
              placeholder="Password"
              startAdornment={
                <InputAdornment position="start">
                  <LockRoundedIcon color="icon" />
                </InputAdornment>
              }
              style={{ width: "100%", margin: "20px 0" }}
            />
            <LogInFormButton variant="contained" type="submit">
              Log In
            </LogInFormButton>
            <LogInFormButton variant="outlined" href="/wallet/register">
              Register
            </LogInFormButton>
          </StyledFormBox>
        </StyledFormBlurBackground>
      </Section>
    </>
  );
};

export default LogInForm;
