import { forwardRef, useState } from "react";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { Box, Input, InputAdornment, Typography } from "@mui/material";
import ContainerMui from "../StyledComponents/ContainerMUI";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MainButton from "../StyledComponents/MainButton";

const ChangeEmail = () => {
  const handleSave = (e) => {
    e.preventDefault();
    console.log("kliknąłeś mnie");
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
      <Typography>We send you a verification email.</Typography>
    </Box>
  );
};

const Settings = forwardRef((props, ref) => {
  const [openEmail, setOpenEmail] = useState(true);

  return (
    <ContainerMui
      ref={ref}
      sx={{ display: "flex", borderRadius: "30px", marginTop: "60px" }}
      style={{ justifyContent: "center", backgroundColor: "white" }}
    >
      <Box
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "600px",
          padding: "0",
          paddingTop: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", width: "100%", gap: "10px" }}>
          <SecondaryButton
            variant="outlined"
            type="submit"
            onClick={() => setOpenEmail(true)}
          >
            Change email
          </SecondaryButton>
          <SecondaryButton
            variant="outlined"
            onClick={() => setOpenEmail(false)}
          >
            Change password
          </SecondaryButton>
        </Box>
        {openEmail ? <ChangeEmail /> : <p>zamknięte</p>}
      </Box>
    </ContainerMui>
  );
});
export default Settings;
