import { forwardRef, useState } from "react";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { Box } from "@mui/material";
import styled from "styled-components";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import { Container } from "@mui/system";

const SettingsBox = styled(Box)`
  position: relative;
  display: flex;
  gap: 20px;
  max-width: 600px;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
`;

const SettingsContainer = styled(Container)``;

const Settings = forwardRef((props, ref) => {
  const [openEmail, setOpenEmail] = useState(true);

  return (
    <SettingsContainer
      ref={ref}
      sx={{ display: "flex", borderRadius: "30px", marginTop: "60px" }}
      style={{ justifyContent: "center" }}
    >
      <SettingsBox>
        <Box style={{ display: "flex", width: "100%", gap: "10px" }}>
          <SecondaryButton
            variant="outlined"
            type="submit"
            onClick={() => setOpenEmail(true)}
            color={openEmail ? "info" : "main"}
          >
            Change email
          </SecondaryButton>
          <SecondaryButton
            variant="outlined"
            onClick={() => setOpenEmail(false)}
            color={openEmail ? "main" : "info"}
          >
            Change password
          </SecondaryButton>
        </Box>
        {openEmail ? <ChangeEmail /> : <ChangePassword />}
      </SettingsBox>
    </SettingsContainer>
  );
});
export default Settings;
