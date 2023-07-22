import { useEffect, useState } from "react";
import dataObjects from "./devObject";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";

const Transaction = () => {
  const [isMobile, setMobile] = useState(window.innerWidth >= 600);
  console.log(isMobile);
  const handleEdit = (e) => {
    let id = e.target.closest(".BodyTableRow")?.id;
    let newId = parseInt(id);
    let transactionToEdit = dataObjects.find((item) => item.id === newId);
    console.log(transactionToEdit);
    // dalsza logika po dodaniu stanu
  };
  const handleRemove = (e) => {
    let id = e.target.closest(".BodyTableRow")?.id;
    const newId = parseInt(id);
    const newDataObject = dataObjects.filter((item) => item.id !== newId);
    console.log(newDataObject);
    console.log(id);
    // dalsza logika po dodaniu stanu
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth >= 600);
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
