import styled from "@emotion/styled";
import { Box } from "@mui/system";

const StyledFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  height: auto;
  width: 100%;
  max-width: 408px;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 482px) {
    padding: 113px 20px 107px;
  }
  @media (min-width: 482px) {
    background-color: #fff;
    padding: 40px 60px 60px;
    margin-top: 50px;
  }
`;

export default StyledFormBox;