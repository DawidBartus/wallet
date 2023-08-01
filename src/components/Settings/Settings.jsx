import { forwardRef, useState } from "react";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { Box } from "@mui/material";
import styled from "styled-components";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import { Container } from "@mui/system";
import SectionHeader from "../StyledComponents/ModalHeader";

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
  const { close } = props;

  return (
    <SettingsContainer
      ref={ref}
      sx={{ display: "flex", borderRadius: "30px", marginTop: "60px" }}
      style={{ justifyContent: "center" }}
    >
      <SettingsBox>
        <SectionHeader>Settings</SectionHeader>
        <Box style={{ display: "flex", width: "100%", gap: "10px" }}>
          <SecondaryButton
            variant="outlined"
            type="submit"
            onClick={() => setOpenEmail(true)}
            color={openEmail ? "primary" : "info"}
          >
            Change email
          </SecondaryButton>
          <SecondaryButton
            variant="outlined"
            onClick={() => setOpenEmail(false)}
            color={openEmail ? "info" : "primary"}
          >
            Change password
          </SecondaryButton>
        </Box>
        {openEmail ? <ChangeEmail /> : <ChangePassword />}
        <SecondaryButton color="info" onClick={close}>
          Close
        </SecondaryButton>
      </SettingsBox>
    </SettingsContainer>
  );
});
export default Settings;
