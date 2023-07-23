import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Section from "../StyledSection/StyledSection";
import Currency from "../Currency/Currency";
import Balance from "../BalanceSection/BalanceSection";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import { useEffect, useState } from "react";

const NavigationWrapper = styled(Box)`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin-top: 40px;
  padding-right: 24px;
  gap: 32px;
  @media (max-width: 1279px) {
    display: flex;
    width: 100%;
    padding: 0;
    height: auto;
    justify-content: center;
    max-width: none;
    align-items: flex-start;
  }
`;

const StyledDivWrapper = styled.div`
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HomePage = () => {
  const location = useLocation();
  const isCurrency = location.pathname === "/home/currency";
  const isHome = location.pathname === "/home";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <Section
      style={{
        maxWidth: "1488px",
        padding: "0px 24px",
        alignItems: "flex-start",
      }}
    >
      <NavigationWrapper>
        <StyledDivWrapper>
          <SecondaryNavigation />
          {windowWidth || isHome ? <Balance /> : ""}
        </StyledDivWrapper>
        {isCurrency ? "" : <Currency />}
      </NavigationWrapper>
      <Box style={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Section>
  );
};

export default HomePage;
