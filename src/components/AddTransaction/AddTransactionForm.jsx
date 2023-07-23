import { Switch, TextField, Typography } from "@mui/material";
import ContainerMui from "../StyledComponents/ContainerMUI";
import { styled } from "@mui/material/styles";
import StyledFormBox from "../StyledComponents/StyledFormBox";
import { useState } from "react";
import { Stack } from "@mui/system";
import StyledTypography from "../StyledComponents/StyledTypography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 50,
  padding: 8,
  overflow: "visible",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(2px) translateY(2px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px) translateY(2px)",
      "& .MuiSwitch-thumb:before": {
        content: "'-'",
        backgroundColor: "#FF6596",
        borderRadius: "50%",
        boxShadow: "0px 6px 15px 0px rgba(255, 101, 150, 0.50)",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "transparent",
        border: "1px solid #E0E0E0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 44,
    height: 44,
    "&:before": {
      backgroundColor: "#24CCA7",
      borderRadius: "50%",
      content: "'+'",
      boxShadow: "0px 6px 15px 0px rgba(36, 204, 167, 0.50)",
      alignContent: "center",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "transparent",
    border: "1px solid #E0E0E0",
    borderRadius: 20 / 2,
  },
}));

const AddTransactionForm = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setChecked((prevState) => {
      console.log("1", !prevState);
      return !prevState;
    });
  };
  return (
    <ContainerMui
      sx={{
        display: "flex",
        borderRadius: "30px",
        marginTop: "60px",
        backgroundColor: "#fff",
      }}
      style={{ justifyContent: "center" }}
    >
      <StyledFormBox>
        <Typography>Add transaction</Typography>
        <Stack direction="row" alignItems="center">
          <StyledTypography color={checked ? "#E0E0E0" : "#24CCA7"}>
            Income
          </StyledTypography>
          <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
          <StyledTypography color={checked ? "#FF6596" : "#E0E0E0"}>
            Expense
          </StyledTypography>
        </Stack>
        <Stack direction="row">
          <TextField id="standard-basic" label="0.00" variant="standard" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              style={{ padding: "0px" }}
            >
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                label="Data"
                slotProps={{
                  textField: { size: "small", variant: "standard" },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
      </StyledFormBox>
    </ContainerMui>
  );
};

export default AddTransactionForm;
