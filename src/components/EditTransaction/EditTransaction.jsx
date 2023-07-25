import { Modal } from "@mui/material";

const EditTransaction = ({ open, close, toChange }) => {
  console.log("edit", toChange);
  return (
    <Modal open={open} onClose={close}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{toChange?.sum}</p>
      </div>
    </Modal>
  );
};

export default EditTransaction;
