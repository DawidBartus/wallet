import { MenuItem, Select } from "@mui/material";
import { SelectContainer } from "./TransactionStyledComponent";

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

const SelectBar = ({ value, change }) => {
  return (
    <SelectContainer>
      <Select value={value} onChange={change} variant="standard">
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectBar;
