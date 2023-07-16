import { Box } from "@mui/material";
import styled from "styled-components";

const FormBlurBackground = styled(Box)`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.4);
    align-items: center;
    backdrop-filter: ${(props) => props.shouldBeBlur};
  }
`;

const StyledFormBlurBackground = (props) => {
  const { children, blur } = props;

  return (
    <FormBlurBackground component="div" style={{ backdropFilter: blur }}>
      {children}
    </FormBlurBackground>
  );
};

export default StyledFormBlurBackground;
