import { forwardRef, useState } from "react";
import SecondaryButton from "../StyledComponents/SecondaryButton";
import { Box } from "@mui/material";
import ContainerMui from "../StyledComponents/ContainerMUI";
import styled from "styled-components";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

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

const Settings = forwardRef((props, ref) => {
  const [openEmail, setOpenEmail] = useState(true);

  return (
    <ContainerMui
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
        {openEmail ? <ChangeEmail /> : <ChangePassword />}
      </SettingsBox>
    </ContainerMui>
  );
});
export default Settings;
