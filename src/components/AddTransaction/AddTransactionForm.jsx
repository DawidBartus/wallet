import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import StyledTypography from "../StyledComponents/StyledTypography";
import MaterialUISwitch from "../StyledComponents/MaterialUISwitch";
import { DatePicker } from "@mui/x-date-pickers";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { addTransaction } from "../../Redux/transactionsSlice";
import { styled } from "@mui/material/styles";
import AddTransactionWrapper, {
  CommentField,
  SelectContainer,
  AddTransactionHeader,
  ButtonFlexWrapper,
  FlexWrapperBox,
} from "./TransactionStyledComponent";

const options = [
  "Select a category",
  "Main expenses",
  "Products",
  "Car",
  "Self care",
  "Child care",
  "Household products",
  "Education",
  "Leisure",
];

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "blue",
  },
}));

const SelectBar = ({ value, change }) => {
  return (
    <SelectContainer>
      <CustomSelect value={value} onChange={change} variant="standard">
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </CustomSelect>
    </SelectContainer>
  );
};

const AddTransactionForm = ({ onClose }) => {
  const today = dayjs();
  const formattedDate = today.format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("Select a category");
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(formattedDate);

  const handleChange = (e) => {
    setChecked((prevState) => {
      console.log("1", !prevState);
      return !prevState;
    });
  };
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleNewTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const isIncome = checked;
    const date = value;
    const category = isIncome ? "Income" : selected;
    const sum = parseInt(form.amount.value);
    const comment = form.comment.value;
    const id = nanoid();

    const newTransaction = {
      id,
      date,
      type: isIncome,
      category,
      comment,
      sum,
    };
    dispatch(addTransaction(newTransaction));
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
      {checked ? "" : <SelectBar value={selected} change={handleSelected} />}
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
