import { Box, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// SVG icons
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Statistic } from "../images/stats.svg";
import { ReactComponent as CurrencyIcon } from "../images/purpleDollar.svg";
// Customize components
import StyledReactLink, {
  StyledReactLinkMobile,
} from "../StyledComponents/StyledReactLink";

const NavigationButtonText = styled(Typography)`
  @media (max-width: 767px) {
    display: none;
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
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const StyledHomeIcon = styled(Home)`
  width: 44px;
  height: 44px;
  & path {
    width: 44px;
    height: 44px;
  }

  @media (min-width: 767px) {
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

  @media (min-width: 768px) {
    padding-right: 20px;
    width: 24px;
    height: 24px;
    & path {
      width: 24px;
      height: 24px;
    }
  }
`;

const SecondaryNavigation = () => {
  const location = useLocation();

  const shouldBeActiveHome =
    location.pathname === "/home" ? "current" : "available";
  const shouldBeActiveStat =
    location.pathname === "/home/statistic" ? "current" : "available";

  return (
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
      <StyledReactLinkMobile style={{ width: "auto" }} to="/home/currency">
        <Button variant="text">
          <StyledCurrencyIcon />
        </Button>
      </StyledReactLinkMobile>
    </IconHolder>
  );
};

export default SecondaryNavigation;
