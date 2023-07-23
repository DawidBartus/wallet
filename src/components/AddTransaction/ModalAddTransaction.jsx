import { Modal } from "@mui/material";
import AddTransactionForm from "./AddTransactionForm";
import styled from "styled-components";

const TransactionModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalAddTransaction = (props) => {
  const { open, close } = props;

  return (
    <TransactionModal open={open} onClose={close}>
      <AddTransactionForm />
    </TransactionModal>
  );
};

export default ModalAddTransaction;
