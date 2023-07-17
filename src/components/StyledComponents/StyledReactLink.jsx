import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledReactLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const StyledReactLinkMobile = styled(Link)`
  display: none;
  @media (max-width: 480px) {
    text-decoration: none;
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export default StyledReactLink;
export { StyledReactLinkMobile };
