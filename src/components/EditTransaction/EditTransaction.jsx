// import { Modal, TextField } from "@mui/material";
// import { Stack } from "@mui/system";
// import StyledTypography from "../StyledComponents/StyledTypography";
// import AddTransactionWrapper, {
//   CommentField,
//   FlexWrapperBox,
// } from "../AddTransaction/TransactionStyledComponent";
// import { DatePicker } from "@mui/x-date-pickers";
// import SelectBar from "../AddTransaction/SelectBar";
// import { useState } from "react";

// const EditTransaction = ({ open, close, toChange }) => {
//   const { date, type, category, comment, sum } = toChange;

//   const [newType, setNewType] = useState(type);
//   const [value, setValue] = useState(date);
//   const [selected, setSelected] = useState(category);

//   const handleSelected = (e) => {
//     setSelected(e.target.value);
//   };
//   console.log(newType);
//   return (
//     <Modal open={open} onClose={close}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "#fff",
//         }}
//       >
//         <AddTransactionWrapper>
//           <Stack direction="row" alignItems="center">
//             <StyledTypography
//               name="income"
//               color={newType ? "#E0E0E0" : "#24CCA7"}
//             >
//               Income
//             </StyledTypography>
//             <StyledTypography>/</StyledTypography>
//             <StyledTypography
//               color={newType ? "#FF6596" : "#E0E0E0"}
//               name="expense"
//             >
//               Expense
//             </StyledTypography>
//           </Stack>
//           <SelectBar value={selected} change={handleSelected} />
//           <FlexWrapperBox>
//             <TextField
//               required
//               name="amount"
//               id="standard-basic"
//               label="0.00"
//               variant="standard"
//               value={sum}
//             />
//             <DatePicker
//               name="data"
//               label="Data"
//               onChange={(newValue) => setValue(newValue)}
//               slotProps={{ textField: { size: "medium", variant: "standard" } }}
//             />
//           </FlexWrapperBox>
//           <CommentField
//             name="comment"
//             id="comment"
//             label="Comment"
//             variant="standard"
//             value={comment}
//           />
//         </AddTransactionWrapper>
//       </div>
//     </Modal>
//   );
// };

// export default EditTransaction;
