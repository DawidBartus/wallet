import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction } from "../../Redux/transactionsSlice";
// Components
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";
// import EditTransaction from "../EditTransaction/EditTransaction";
// import EditTransaction from "../EditTransaction/EditTransaction";

const Transaction = () => {
  const dataObject = useSelector((state) => state.transaction.transactions);

  const [isMobile, setMobile] = useState(window.innerWidth > 767);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState();
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    let id = e.target.closest(".BodyTableRow")?.id;
    const newId = id;
    dispatch(removeTransaction(newId));
    // dalsza logika do przesłania do backendu
  };

  // const handleEdit = (e) => {
  //   let id = e.target.closest(".BodyTableRow")?.id;
  //   let transaction = dataObject.find((item) => item.id === id);
  //   setEdit(transaction);
  //   handleOpen();
  // };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <HorizontalTable remove={handleRemove} />
      ) : (
        <VerticalTable remove={handleRemove} />
      )}
      {/* {edit ? (
        <EditTransaction open={open} close={handleClose} toChange={edit} />
      ) : (
        ""
      )} */}
    </>
  );
};

export default Transaction;
