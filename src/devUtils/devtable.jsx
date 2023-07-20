import { useEffect, useState } from "react";
import ContainerMui from "../components/StyledComponents/ContainerMUI";
import dataObjects from "../components/Transaction/devObject";
import VerticalHeaderTable from "./verticalTable";

const Horizontal = () => {
  return (
    <ContainerMui style={{ maxHeight: "750px", overflowX: "auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {dataObjects.map(({ date, type, category, comment, sum }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{type ? "+" : "-"}</td>
              <td>{category}</td>
              <td>{comment}</td>
              <td>{sum}</td>
              <td>
                <button>Remove</button>
              </td>
              <td>
                <button>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerMui>
  );
};

const DevTable = () => {
  const [mobile, setMobile] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  console.log(mobile);
  console.log(window.innerWidth);
  return <>{mobile ? <Horizontal /> : <VerticalHeaderTable />}</>;
};

export default DevTable;
