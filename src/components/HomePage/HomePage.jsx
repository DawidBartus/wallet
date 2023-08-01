import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Currency from "../Currency/Currency";
import Balance from "../BalanceSection/BalanceSection";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import { useEffect, useState } from "react";
import AddTransactionButton from "../AddTransaction/AddTransaction";

const NavigationWrapper = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 464px;
  height: 100vh;
  padding-top: 15px;
  gap: 32px;
  @media (min-width: 768px) {
    padding-top: 32px;
  }
  @media (min-width: 1279px) {
    padding-top: 40px;
  }
  @media (max-width: 1279px) {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    max-width: none;
    align-items: flex-start;
  }
`;

const StyledDivWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 767px) {
    align-items: flex-start;
  }
`;

const BoxShadow = styled.div`
  position: absolute;
  height: 100vh;
  width: 1px;
  top: 0;
  right: 0;
  background: #e7e5f2;
  filter: drop-shadow(-1px 0px 0px rgba(0, 0, 0, 0.05));
  &::after {
    filter: drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.6));
  }
  @media (max-width: 1278px) {
    display: none;
  }
`;

const HomePageSection = styled.section`
  width: 100%;
  max-width: 1488px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1279px) {
    padding: 0 16px;
    flex-direction: row;
  }
`;
const BoxOutlet = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  @media (max-width: 767px) {
    height: 70vh;
  }
  @media (max-width: 1278px) {
    height: 70vh;
  }
  @media (min-width: 1279px) {
    height: 90vh;
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
    <HomePageSection>
      <NavigationWrapper>
        <StyledDivWrapper>
          <SecondaryNavigation />
          {windowWidth || isHome ? <Balance /> : ""}
        </StyledDivWrapper>
        {isCurrency ? "" : <Currency />}
        <BoxShadow />
      </NavigationWrapper>
      <BoxOutlet>
        <Outlet />
        {isHome ? <AddTransactionButton /> : ""}
      </BoxOutlet>
    </HomePageSection>
  );
};

export default HomePage;
