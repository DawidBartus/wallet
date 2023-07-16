import { Box, Typography, Button } from "@mui/material";
import Section from "../StyledSection/StyledSection";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Statistic } from "../images/stats.svg";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
import { balance } from "../../devUtils/devVariable";
import StyledReactLink from "../StyledComponents/StyledReactLink";

const StyledHomeIcon = styled(Home)`
  width: 44px;
  height: 44px;
  & path {
    width: 44px;
    height: 44px;
  }

  @media (min-width: 480px) {
    padding-right: 20px;
    width: 24px;
    height: 24px;
    & path {
      width: 24px;
      height: 24px;
    }
  }
`;
const StyledStatisticIcon = styled(Statistic)`
  width: 44px;
  height: 44px;
  & path {
    width: 44px;
    height: 44px;
  }

  @media (min-width: 480px) {
    padding-right: 20px;
    width: 24px;
    height: 24px;
    & path {
      width: 24px;
      height: 24px;
    }
  }
`;

const IconHolder = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 13px;
`;
const BalanceSection = styled(Box)`
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 4px 0px 11px 40px;
`;

const HomePage = () => {
  const location = useLocation();
  console.log(location.pathname);
  const shouldBeActiveHome =
    location.pathname === "/home" ? "current" : "available";
  const shouldBeActiveStat =
    location.pathname === "/home/statistic" ? "current" : "available";

  return (
    <Section maxWidth="xl">
      <Box
        style={{
          width: "100%",
          minWidth: "600px",
          height: "100vh",
          marginTop: "40px",
          marginLeft: "35px",
        }}
      >
        <IconHolder>
          <StyledReactLink style={{ width: "auto" }} to="/home">
            <Button variant="text">
              <StyledHomeIcon />
              <Typography variant={shouldBeActiveHome}>Home</Typography>
            </Button>
          </StyledReactLink>
          <StyledReactLink style={{ width: "auto" }} to="/home/statistic">
            <Button variant="text">
              <StyledStatisticIcon />
              <Typography variant={shouldBeActiveStat}>Statistic</Typography>
            </Button>
          </StyledReactLink>
        </IconHolder>
        <BalanceSection>
          <Typography style={{ color: "#A6A6A6" }}>Your Balance</Typography>
          <Typography variant="balance">{`$ ${balance}`}</Typography>
        </BalanceSection>
      </Box>
      <Box style={{ width: "100%", height: "100vh", backgroundColor: "green" }}>
        <Outlet />
      </Box>
    </Section>
  );
};

export default HomePage;
