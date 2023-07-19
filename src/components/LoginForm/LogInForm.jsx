import { Input, InputAdornment, Typography } from "@mui/material";
import StyledFormBlurBackground from "../Background/FormBlurBackground";
// MUI icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
// SVG icons
import { ReactComponent as Wallet } from "../images/wallet.svg";
import ShoppingMan from "../IconsFromSVG/ShoppingMan";
// Customize components
import Section from "../StyledSection/StyledSection";
import StyledBoxWithMainSVG from "../StyledComponents/StyledBoxWithMainSVG";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import StyledFormBox from "../StyledComponents/StyledFormBox";
import StyledReactLink from "../StyledComponents/StyledReactLink";
import { useState } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("kliknąłeś mnie");
};

const LogInForm = () => {
  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible((prevState) => !prevState);
  };

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
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
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
              name="password"
              type={visible ? "text" : "password"}
              inputProps={{ min: 6, max: 12 }}
              required
              startAdornment={
                <InputAdornment position="start">
                  <LockRoundedIcon color="icon" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment
                  position="end"
                  onClick={togglePasswordVisibility}
                >
                  {visible ? (
                    <VisibilityOffIcon color="icon" />
                  ) : (
                    <VisibilityIcon color="icon" />
                  )}
                </InputAdornment>
              }
              style={{ width: "100%", margin: "20px 0" }}
            />
            <MainButton variant="contained" type="submit">
              Log In
            </MainButton>
            <StyledReactLink to="/register">
              <SecondaryButton variant="outlined" color="info">
                Register
              </SecondaryButton>
            </StyledReactLink>
            <StyledReactLink to="/home">
              <SecondaryButton variant="outlined" color="info">
                DEV ROUTE TO HOME
              </SecondaryButton>
            </StyledReactLink>
          </StyledFormBox>
        </StyledFormBlurBackground>
      </Section>
    </>
  );
};

export default LogInForm;
