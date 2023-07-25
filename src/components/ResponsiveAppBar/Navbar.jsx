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
import Settings from "../Settings/Settings";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const BlurSection = styled(Box)`
background-color: #E7EAF2;
width: 100%;
display: flex;
justify-content: center;
position: fixed;
@media (min-width: 769px) {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
}
  }
`;

const ResponsiveAppBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <Button onClick={handleOpen}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </Button>

              <IconButton
                style={{
                  borderLeft: "1px solid #BDBDBD",
                  marginLeft: "10px",
                  borderRadius: "0px",
                }}
              >
                <Typography variant="h5" color={"icon.gray"}>
                  <Exit />
                  Exit
                </Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Settings />
      </Modal>
      <BlurSection>
        <Outlet />
      </BlurSection>
    </>
  );
};
export default ResponsiveAppBar;
