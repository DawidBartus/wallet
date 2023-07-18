import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const FormBlurBackground = styled(Box)`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;

  @media (min-width: 769px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
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

  return (
    <FormBlurBackground
      component="div"
      style={{ backdropFilter: blur, alignItems: align }}
    >
      {children}
    </FormBlurBackground>
  );
};

export default StyledFormBlurBackground;
