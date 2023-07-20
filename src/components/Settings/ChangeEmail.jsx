import { Box, Input, InputAdornment, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MainButton from "../StyledComponents/MainButton";
import { useState } from "react";

const ChangeEmail = () => {
  const [sent, setSent] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    // Logic to check mail address and send request to API

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
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="New email address"
        autoComplete="email"
        required
        startAdornment={
          <InputAdornment position="start">
            <EmailRoundedIcon color="icon" />
          </InputAdornment>
        }
        sx={{ margin: "20px 0" }}
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Confirm email address"
        autoComplete="email"
        required
        startAdornment={
          <InputAdornment position="start">
            <EmailRoundedIcon color="icon" />
          </InputAdornment>
        }
      />
      <MainButton variant={"contained"} sx={{ width: "auto" }} type="submit">
        Save
      </MainButton>
      {sent ? (
        <Typography textAlign={"center"}>
          Verification mail was sent. R
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ChangeEmail;
