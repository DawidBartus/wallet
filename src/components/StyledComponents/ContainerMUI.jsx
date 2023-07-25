import { Container } from "@mui/material";
import styled from "styled-components";

const ContainerMui = styled(Container)`
  margin-top: 20px;
  height: 60vh;
  @media (min-width: 1279px) {
    margin-top: 40px;
    height: 85vh;
  }
`;
export default ContainerMui;
