import { useState } from "react";
// MUI icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
// SVG icons
import PhoneWoman from "../IconsFromSVG/PhoneWoman";
import { ReactComponent as Wallet } from "../images/wallet.svg";
// MUI components
import { Input, InputAdornment, Typography } from "@mui/material";
// Customize components
import Section from "../StyledSection/StyledSection";
import StyledFormBlurBackground from "../Background/FormBlurBackground";
import StyledBoxWithMainSVG from "../StyledComponents/StyledBoxWithMainSVG";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import StyledFormBox from "../StyledComponents/StyledFormBox";
import StyledReactLink from "../StyledComponents/StyledReactLink";

const handleSubmit = (e) => {
  e.preventDefault();
};

const RegisterForm = () => {
  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <Section>
      <StyledBoxWithMainSVG component="div" style={{ paddingTop: "20px" }}>
        <PhoneWoman />
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
              <InputAdornment position="end" onClick={togglePasswordVisibility}>
                {visible ? (
                  <VisibilityOffIcon color="icon" />
                ) : (
                  <VisibilityIcon color="icon" />
                )}
              </InputAdornment>
            }
            style={{ width: "100%", marginTop: "20px" }}
          />
          <Input
            id="confirmPassword"
            placeholder="Confirm password"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <LockRoundedIcon color="icon" />
              </InputAdornment>
            }
            style={{ width: "100%", marginTop: "20px" }}
          />
          <Input
            id="name"
            placeholder="First name"
            startAdornment={
              <InputAdornment position="start">
                <AccountBoxIcon color="icon" />
              </InputAdornment>
            }
            style={{ width: "100%", margin: "20px 0" }}
          />
          <MainButton variant="contained" type="submit">
            Register
          </MainButton>
          <StyledReactLink to="/login">
            <SecondaryButton variant="outlined" color="info">
              Log In
            </SecondaryButton>
          </StyledReactLink>
        </StyledFormBox>
      </StyledFormBlurBackground>
    </Section>
  );
};

export default RegisterForm;
