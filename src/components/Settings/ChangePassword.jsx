import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import MainButton from "../StyledComponents/MainButton";
import { useState } from "react";

const ChangePassword = ({ active }) => {
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  console.log("password", active);
  const togglePasswordVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Logic to check password address and send request to API

    // Check API response and update sent state
    setSent(true);
    e.target.reset();
  };
  return (
    <Box
      onSubmit={handleSave}
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "250px",
        justifyContent: "space-evenly",
      }}
    >
      <TextField
        required
        variant="standard"
        id="oldPassword"
        type="password"
        label="Old Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRoundedIcon color="icon" />
            </InputAdornment>
          ),
        }}
        style={{ width: "100%", marginTop: "20px" }}
      />
      <TextField
        required
        variant="standard"
        id="newPassword"
        type="password"
        label="New password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRoundedIcon color="icon" />
            </InputAdornment>
          ),
        }}
        style={{ width: "100%", marginTop: "20px" }}
      />
      <TextField
        required
        variant="standard"
        id="confirmPassword"
        type={visible ? "text" : "password"}
        name="password"
        label="Confirm password"
        inputProps={{ min: 6, max: 12 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRoundedIcon color="icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" onClick={togglePasswordVisibility}>
              {visible ? (
                <VisibilityOffIcon color="icon" />
              ) : (
                <VisibilityIcon color="icon" />
              )}
            </InputAdornment>
          ),
        }}
        style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
      />
      <MainButton variant={"contained"} sx={{ width: "auto" }} type="submit">
        Save
      </MainButton>
      {sent ? (
        <Typography textAlign={"center"} marginTop={3}>
          Open the mail to confirm the change.
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ChangePassword;
