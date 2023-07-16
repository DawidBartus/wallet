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

const ResponsiveAppBar = (props) => {
  console.log(props.children);
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFF", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="div">
              <Typography variant="header">
                <Wallet />
                Wallet
              </Typography>
            </Box>
            <IconButton>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default ResponsiveAppBar;
