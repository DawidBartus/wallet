import { Container } from "@mui/material";
import styled from "styled-components";

const ContainerMui = styled(Container)`
  margin-top: 20px;
  background-color: red;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
export default ContainerMui;
