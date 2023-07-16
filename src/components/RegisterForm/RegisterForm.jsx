import { Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Section from "../StyledSection/StyledSection";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import StyledFormBlurBackground from "../Background/FormBlurBackground";

import PhoneWoman from "../IconsFromSVG/PhoneWoman";
import StyledBoxWithMainSVG from "../StyledComponents/StyledBoxWithMainSVG";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import StyledFormBox from "../StyledComponents/StyledFormBox";
import LogInFormLink from "../StyledComponents/LogInFormLink";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("kliknąłeś mnie");
};

const RegisterForm = () => {
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
            startAdornment={
              <InputAdornment position="start">
                <LockRoundedIcon color="icon" />
              </InputAdornment>
            }
            style={{ width: "100%", marginTop: "20px" }}
          />
          <Input
            id="confirmPassword"
            placeholder="Confirm password"
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
          <LogInFormLink to="/login">
            <SecondaryButton variant="outlined" color="info">
              Log In
            </SecondaryButton>
          </LogInFormLink>
        </StyledFormBox>
      </StyledFormBlurBackground>
    </Section>
  );
};

export default RegisterForm;
