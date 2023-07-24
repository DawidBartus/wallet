import styled from "@emotion/styled";
import { Box } from "@mui/system";

const StyledFormBox = styled(Box)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  height: auto;
  width: 100%;
  max-width: 409.5px;
  padding: 40px 58.5px 62px 65px;
  gap: 20px;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    padding: 113px 20px 107px;
  }
  @media (min-width: 1279px) {
    margin-top: 50px;
  }
`;

export default StyledFormBox;
