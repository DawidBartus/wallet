import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import StyledTypography from "../StyledComponents/StyledTypography";
import MaterialUISwitch from "../StyledComponents/MaterialUISwitch";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

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

const AddTransactionHeader = styled.p`
  color: #000;
  margin: 0;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CommentField = styled(TextField)`
  margin-top: 40px;
  width: calc(100% - 40px);
  min-width: 280px;
  max-width: 392px;
`;

const AddTransactionForm = ({ onClose }) => {
  const today = dayjs().format("YYYY-MM-DD");
  console.log(today);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(today);

  const handleChange = (e) => {
    setChecked((prevState) => {
      console.log("1", !prevState);
      return !prevState;
    });
  };

  const handleNewTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const isIncome = checked;
    const date = value;
    const category = isIncome ? "Income" : "expense";
    const sum = form.amount.value;
    const comment = form.comment.value;
    console.log(value);
    const newTransaction = {
      id: nanoid(),
      date,
      type: isIncome,
      category,
      comment,
      sum,
    };
    console.log(newTransaction);
  };
  return (
    <AddTransactionWrapper onSubmit={handleNewTransaction}>
      <AddTransactionHeader>Add transaction</AddTransactionHeader>
      <Stack direction="row" alignItems="center">
        <StyledTypography name="income" color={checked ? "#24CCA7" : "#E0E0E0"}>
          Income
        </StyledTypography>
        <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
        <StyledTypography
          name="expense"
          color={checked ? "#E0E0E0" : "#FF6596"}
        >
          Expense
        </StyledTypography>
      </Stack>
      <FlexWrapperBox>
        <TextField
          required
          name="amount"
          id="standard-basic"
          label="0.00"
          variant="standard"
        />
        <DatePicker
          defaultValue={today}
          name="data"
          label="Data"
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { size: "medium", variant: "standard" } }}
        />
      </FlexWrapperBox>
      <CommentField
        name="comment"
        id="comment"
        label="Comment"
        variant="standard"
      />
      <ButtonFlexWrapper>
        <MainButton
          variant="contained"
          style={{ width: "100%", maxWidth: "300px" }}
          type="submit"
        >
          ADD
        </MainButton>
        <SecondaryButton variant="outlined" color="info" onClick={onClose}>
          Cancel
        </SecondaryButton>
      </ButtonFlexWrapper>
    </AddTransactionWrapper>
  );
};

export default AddTransactionForm;
