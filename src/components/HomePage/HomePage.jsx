import { Box, Typography, Button } from "@mui/material";
import Section from "../StyledSection/StyledSection";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Statistic } from "../images/stats.svg";
import { ReactComponent as CurrencyIcon } from "../images/purpleDollar.svg";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { balance } from "../../devUtils/devVariable";
import StyledReactLink, {
  StyledReactLinkMobile,
} from "../StyledComponents/StyledReactLink";
import Currency from "../Currency/Currency";

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
const StyledCurrencyIcon = styled(CurrencyIcon)`
  width: 44px;
  height: 44px;
  & path {
    width: 44px;
    height: 44px;
  }
`;

const IconHolder = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 13px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const BalanceSection = styled(Box)`
  min-width: 120px;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 4px 0px 11px 40px;
  @media (max-width: 768px) {
    margin-right: 32px;
  }
`;

const NavigationWrapper = styled(Box)`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin-top: 40px;
  padding-right: 24px;

  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavigationButtonText = styled(Typography)`
  @media (max-width: 480px) {
    display: none;
  }
`;

const HomePage = () => {
  const location = useLocation();

  const isNotCurrency = location.pathname === "/home/currency";

  const shouldBeActiveHome =
    location.pathname === "/home" ? "current" : "available";
  const shouldBeActiveStat =
    location.pathname === "/home/statistic" ? "current" : "available";

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
          <IconHolder>
            <StyledReactLink style={{ width: "auto" }} to="/home">
              <Button variant="text">
                <StyledHomeIcon />
                <NavigationButtonText variant={shouldBeActiveHome}>
                  Home
                </NavigationButtonText>
              </Button>
            </StyledReactLink>
            <StyledReactLink style={{ width: "auto" }} to="/home/statistic">
              <Button variant="text">
                <StyledStatisticIcon />
                <NavigationButtonText variant={shouldBeActiveStat}>
                  Statistic
                </NavigationButtonText>
              </Button>
            </StyledReactLink>
            {/* Currency mobile button */}
            <StyledReactLinkMobile
              style={{ width: "auto" }}
              to="/home/currency"
            >
              <Button variant="text">
                <StyledCurrencyIcon />
              </Button>
            </StyledReactLinkMobile>
          </IconHolder>
          <BalanceSection>
            <Typography style={{ color: "#A6A6A6" }}>Your Balance</Typography>
            <Typography variant="balance">$ {balance}</Typography>
          </BalanceSection>
        </StyledDivWrapper>
        {isNotCurrency ? "" : <Currency />}
      </NavigationWrapper>
      <Box style={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Section>
  );
};

export default HomePage;
