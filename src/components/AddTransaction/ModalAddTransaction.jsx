import { Modal } from "@mui/material";
import AddTransactionForm from "./AddTransactionForm";

const ModalAddTransaction = (props) => {
  const { open, close } = props;

  return (
    <Modal open={open} onClose={close}>
      <AddTransactionForm />
    </Modal>
  );
};

export default ModalAddTransaction;
