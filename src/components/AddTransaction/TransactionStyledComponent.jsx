import { TextField, Box, FormControl } from "@mui/material";
import styled from "styled-components";

const AddTransactionWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 60px;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  max-height: 500px;
  @media (min-width: 600px) {
    width: 100%;
    max-width: 540px;
  }
  @media (max-width: 600px) {
    height: 100vh;
    width: 100%;
    margin-top: 0;
  }
`;
const FlexWrapperBox = styled(Box)`
  margin: 0;
  padding: 0 20px;
  display: flex;
  text-align: center;
  width: calc(100% - 40px);
  max-width: 394px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (min-width: 601px) {
    flex-direction: row;
    gap: 32px;
  }
`;
const ButtonFlexWrapper = styled(Box)`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CommentField = styled(TextField)`
  margin-top: 40px;
  width: calc(100% - 40px);
  min-width: 280px;
  max-width: 392px;
`;
const SelectContainer = styled(FormControl)`
  width: 100%;
  max-width: 393px;
`;

export { CommentField, SelectContainer, ButtonFlexWrapper, FlexWrapperBox };
export default AddTransactionWrapper;
