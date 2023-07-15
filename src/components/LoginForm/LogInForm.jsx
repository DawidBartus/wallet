import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import ShoppingMan from "../images/shoppingMan/ShoppingMan";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import StyledFormBlurBackground from "../Background/FormBlurBackground";
import styled from "styled-components";

const StyledSection = styled.section`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  height: 100vh;
  width: 100%;
  max-width: 408px;
  max-height: 366px;
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

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("kliknąłeś mnie");
};

const LogInForm = () => {
  return (
    <StyledSection>
      <StyledBoxWithMainSVG component="div">
        <ShoppingMan />
        <Typography variant="header" style={{ fontWeight: 400 }}>
          Finance App
        </Typography>
      </StyledBoxWithMainSVG>
      <StyledFormBlurBackground>
        <StyledFormBox component="form" onSubmit={handleSubmit}>
          <Typography variant="header">
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
            style={{ width: "100%" }}
          />
          <Input
            id="password"
            placeholder="Password"
            startAdornment={
              <InputAdornment position="start">
                <LockRoundedIcon color="icon" />
              </InputAdornment>
            }
            style={{ width: "100%" }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              padding: "13px 0",
              borderRadius: "20px",
              color: "#FFFFFF",
              width: "300px",
            }}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            color="info"
            type="submit"
            style={{
              padding: "13px 0",
              borderRadius: "20px",
              width: "100%",
              minWidth: "280px",
              maxWidth: "300px",
            }}
          >
            Register
          </Button>
        </StyledFormBox>
      </StyledFormBlurBackground>
    </StyledSection>
  );
};

export default LogInForm;
