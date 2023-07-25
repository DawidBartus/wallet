import { Box } from "@mui/material";
import styled from "styled-components";

const FormBlurBackground = styled(Box)`
  display: none;
  @media (min-width: 1278px) {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 50%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur;
  }
`;

const StyledFormBlurBackground = () => {
  return <FormBlurBackground component="div" />;
};

export default StyledFormBlurBackground;
