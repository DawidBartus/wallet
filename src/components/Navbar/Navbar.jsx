import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as Wallet } from "../images/wallet.svg";
import { Outlet } from "react-router-dom";
import { ReactComponent as Exit } from "../images/exit.svg";
import StyledFormBlurBackground from "../Background/FormBlurBackground";

const ResponsiveAppBar = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#FFF",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
            <Box component="div">
              <Typography variant="header">
                <Wallet />
                Wallet
              </Typography>
            </Box>
            <Box component="div">
              <IconButton
                style={{
                  borderRight: "1px solid #BDBDBD",
                  marginRight: "10px",
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <IconButton style={{ borderLeft: "1px solid #BDBDBD" }}>
                <Typography variant="h5" color={"icon.gray"}>
                  <Exit />
                  Exit
                </Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <StyledFormBlurBackground>
        <Outlet />
      </StyledFormBlurBackground>
    </>
  );
};
export default ResponsiveAppBar;
