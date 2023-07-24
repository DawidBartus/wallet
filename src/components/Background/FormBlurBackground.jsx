import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const FormBlurBackground = styled(Box)`
  display: none;
  @media (min-width: 1278px) {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 50%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const StyledFormBlurBackground = (props) => {
  const location = useLocation();

  const shouldChangeStyle =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register"
      ? true
      : false;

  const { children } = props;
  const blur = shouldChangeStyle ? "" : "blur(10px)";
  const align = shouldChangeStyle ? "center" : "flex-start";
  const fixed = shouldChangeStyle ? "" : "fixed";

  return (
    <FormBlurBackground
      component="div"
      style={{ backdropFilter: blur, alignItems: align, position: fixed }}
    >
      {children}
    </FormBlurBackground>
  );
};

export default StyledFormBlurBackground;
