import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import ShoppingMan from "../images/shoppingMan/ShoppingMan";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { useEffect, useState } from "react";
import FormBlurBackground from "../Background/FormBlurBackground";

const boxCSS = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white.main",
  alignItems: "center",
  borderRadius: "20px",
  height: "100vh",
  width: "100%",
  maxWidth: "533px",
  maxHeight: "468px",
  justifyContent: "space-between",
  padding: "40px 60px 60px",
};
const svgBasicStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "550px",
  paddingTop: "60px",
  maxHeight: "600px",
};
const svgNNotMobileStyles = {
  flexDirection: "column",
  gap: 30,
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("kliknąłeś mnie");
};

const LogInForm = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const registerWindowPadding =
    width <= 768 ? { paddingTop: "107px" } : { paddingTop: "40px" };

  const sectionFlex =
    width <= 768
      ? {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }
      : {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        };

  const backgroundBlur =
    width >= 768
      ? {
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.40)",
          alignItems: "center",
        }
      : {
          backgroundColor: "none",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        };

  const isMobileStyle = width >= 768 ? true : false;
  const isPhoneStyle = width >= 600 ? true : false;
  const svgContainerMobile = width >= 768 ? svgNNotMobileStyles : "";
  const svgIconHolder = { ...svgBasicStyles, ...svgContainerMobile };

  return (
    <section style={sectionFlex}>
      <span style={svgIconHolder}>
        {isPhoneStyle ? <ShoppingMan isMobile={isMobileStyle} /> : ""}
        {isPhoneStyle ? (
          <Typography variant="header" style={{ fontWeight: 400 }}>
            Finance App
          </Typography>
        ) : (
          ""
        )}
      </span>
      <FormBlurBackground style={backgroundBlur}>
        <Box component="form" onSubmit={handleSubmit} sx={boxCSS}>
          <Typography variant="header" style={registerWindowPadding}>
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
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Box>
      </FormBlurBackground>
    </section>
  );
};

export default LogInForm;
