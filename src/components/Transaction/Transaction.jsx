import { useEffect, useState } from "react";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../../Redux/transactionsSlice";

const Transaction = () => {
  const [isMobile, setMobile] = useState(window.innerWidth > 767);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    let id = e.target.closest(".BodyTableRow")?.id;
    console.log(id);
    const newId = parseInt(id);
    dispatch(removeTransaction(newId));
    // dalsza logika do przesłania do backendu
  };
  const handleEdit = (e) => {
    // let id = e.target.closest(".BodyTableRow")?.id;
    // let newId = parseInt(id);
    // let transactionToEdit = dataObjects.find((item) => item.id === newId);
    // logika do zmiany stanu po wprowadzeniu zmian
  };

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
        <HorizontalTable edit={handleEdit} remove={handleRemove} />
      ) : (
        <VerticalTable edit={handleEdit} remove={handleRemove} />
      )}
    </>
  );
};

export default Transaction;
