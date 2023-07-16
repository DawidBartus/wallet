import styled from "styled-components";
import { Box } from "@mui/material";

const StyledBoxWithMainSVG = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 550px;
  padding-top: 60px;
  max-height: 600px;

  @media (max-width: 482px) {
    display: none;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default StyledBoxWithMainSVG;
