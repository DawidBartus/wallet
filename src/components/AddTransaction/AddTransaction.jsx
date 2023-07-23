import { useState } from "react";
import styled from "styled-components";
import ModalAddTransaction from "./ModalAddTransaction";
import { Button } from "@mui/material";
const StyledAddButton = styled(Button)`
  padding: 0 !important;
  height: 44px !important;
  min-width: 44px !important;
  border-radius: 50% !important;
  font-size: 40px !important;
  color: white !important;
`;

const AddTransactionButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledAddButton variant="contained" onClick={handleOpen}>
        +
      </StyledAddButton>
      <ModalAddTransaction open={open} close={handleClose} />
    </>
  );
};

export default AddTransactionButton;
