import { Modal } from "@mui/material";
import AddTransactionForm from "./AddTransactionForm";

const ModalAddTransaction = (props) => {
  const { open, close } = props;

  return (
    <Modal open={open} onClose={close}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <AddTransactionForm onClose={close} />
      </div>
    </Modal>
  );
};

export default ModalAddTransaction;
