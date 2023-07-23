import { TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import StyledTypography from "../StyledComponents/StyledTypography";
import MaterialUISwitch from "../StyledComponents/MaterialUISwitch";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";

const FlexWrapperBox = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (min-width: 601px) {
    flex-direction: row;
    gap: 32px;
  }
`;
const SecondaryWrapperBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const AddTransactionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 60px;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  height: 100vh;
  max-height: 540px;
  @media (min-width: 600px) {
    width: 100%;
    max-width: 600px;
  }
  @media (max-width: 600px) {
    height: 100vh;
    width: 100%;
    margin-top: 0;
  }
`;

const AddTransactionHeader = styled(Typography)`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CommentField = styled(TextField)`
  margin-top: 40px;
  width: 100%;
  max-width: 392px;
`;

const AddTransactionForm = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState();
  console.log("value", value?.$d);
  const handleChange = (e) => {
    setChecked((prevState) => {
      console.log("1", !prevState);
      return !prevState;
    });
  };
  return (
    <AddTransactionWrapper>
      <AddTransactionHeader>Add transaction</AddTransactionHeader>
      <Stack direction="row" alignItems="center">
        <StyledTypography color={checked ? "#E0E0E0" : "#24CCA7"}>
          Income
        </StyledTypography>
        <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
        <StyledTypography color={checked ? "#FF6596" : "#E0E0E0"}>
          Expense
        </StyledTypography>
      </Stack>
      <FlexWrapperBox>
        <TextField id="standard-basic" label="0.00" variant="standard" />
        {/* <DateInput type="date" onChange={(newValue) => setValue(newValue)} /> */}
        <DatePicker
          label="Data"
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { size: "medium", variant: "standard" } }}
        />
      </FlexWrapperBox>

      <CommentField id="comment" label="Comment" variant="standard" />
      <SecondaryWrapperBox>
        <MainButton
          variant="contained"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          ADD
        </MainButton>
        <SecondaryButton variant="outlined" color="info">
          Cancel
        </SecondaryButton>
      </SecondaryWrapperBox>
    </AddTransactionWrapper>
  );
};

export default AddTransactionForm;
