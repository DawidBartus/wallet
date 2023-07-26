import { useState } from "react";
// Mui
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
// Redux
import { useDispatch } from "react-redux";
import { addTransaction } from "../../Redux/transactionsSlice";
// Custom components
import StyledTypography from "../StyledComponents/StyledTypography";
import MaterialUISwitch from "../StyledComponents/MaterialUISwitch";
import MainButton from "../StyledComponents/MainButton";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import AddTransactionWrapper, {
  CommentField,
  ButtonFlexWrapper,
  FlexWrapperBox,
} from "./TransactionStyledComponent";
import SelectBar from "./SelectBar";
// Other
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import SectionHeader from "../StyledComponents/ModalHeader";

const AddTransactionForm = ({ onClose }) => {
  const today = dayjs();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("Select a category");
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(today);

  const handleChange = () => {
    setChecked((prevState) => {
      return !prevState;
    });
  };
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleNewTransaction = (e) => {
    e.preventDefault();

    let form = e.target;
    let id = nanoid();

    const newTransaction = {
      id,
      date: value.format("YY-MM-DD"),
      type: checked,
      category: checked ? "Income" : selected,
      comment: form.comment.value,
      sum: parseInt(form.amount.value),
    };

    dispatch(addTransaction(newTransaction));

    form.reset();
    setSelected("Select a category");
  };

  return (
    <AddTransactionWrapper onSubmit={handleNewTransaction}>
      <SectionHeader>Add transaction</SectionHeader>
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
