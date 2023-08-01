import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../Redux/transactionsSlice";
// Components
import HorizontalTable from "../components/Transaction/HorizontalTable";
import VerticalTable from "../components/Transaction/VerticalTable";

const TransactionPage = () => {
  const [isMobile, setMobile] = useState(window.innerWidth > 767);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    let id = e.target.closest(".BodyTableRow")?.id;
    const newId = id;
    dispatch(removeTransaction(newId));
    // dalsza logika do przesłania do backendu
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
        <HorizontalTable remove={handleRemove} />
      ) : (
        <VerticalTable remove={handleRemove} />
      )}
    </>
  );
};

export default TransactionPage;
