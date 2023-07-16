import { Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import StyledFormBlurBackground from "../Background/FormBlurBackground";
import ShoppingMan from "../IconsFromSVG/ShoppingMan";
import Section from "../StyledSection/StyledSection";
import StyledBoxWithMainSVG from "../StyledComponents/StyledBoxWithMainSVG";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import StyledFormBox from "../StyledComponents/StyledFormBox";
import LogInFormLink from "../StyledComponents/LogInFormLink";

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
              inputProps={{ min: 6, max: 12 }}
              required
              startAdornment={
                <InputAdornment position="start">
                  <LockRoundedIcon color="icon" />
                </InputAdornment>
              }
              style={{ width: "100%", margin: "20px 0" }}
            />
            <MainButton variant="contained" type="submit">
              Log In
            </MainButton>
            <LogInFormLink to="/register">
              <SecondaryButton variant="outlined" color="info">
                Register
              </SecondaryButton>
            </LogInFormLink>
          </StyledFormBox>
        </StyledFormBlurBackground>
      </Section>
    </>
  );
};

export default LogInForm;
