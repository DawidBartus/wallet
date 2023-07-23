import ContainerMui from "../StyledComponents/ContainerMUI";
// import dataObjects from "./devObject";
// import styled from "styled-components";
import { ReactComponent as EditIcon } from "../images/edit.svg";
// import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import AddTransaction from "../StyledComponents/AddTransaction";
import {
  TableHead,
  Table,
  HeaderTableRow,
  BodyTableRow,
  TableHeading,
  TableData,
  TableButton,
} from "./HorizontalStyledComponents";
import AddTransactionButton from "../AddTransaction/AddTransaction";

const HorizontalTable = (props) => {
  const dataObject = useSelector((state) => state.transaction.transactions);
  const { edit, remove } = props;
  return (
    <ContainerMui style={{ maxHeight: "750px", overflowX: "auto" }}>
      {dataObject.length ? (
        <Table style={{ width: "100%" }}>
          <TableHead>
            <HeaderTableRow style={{ textAlign: "left" }}>
              <TableHeading>Date</TableHeading>
              <TableHeading>Type</TableHeading>
              <TableHeading>Category</TableHeading>
              <TableHeading>Comment</TableHeading>
              <TableHeading>Sum</TableHeading>
              <TableHeading></TableHeading>
              <TableHeading></TableHeading>
            </HeaderTableRow>
          </TableHead>
          <tbody>
            {dataObject.map(({ id, date, type, category, comment, sum }) => (
              <BodyTableRow key={id} id={id} className="BodyTableRow">
                <TableData>{date}</TableData>
                <TableData>{type ? "+" : "-"}</TableData>
                <TableData>{category}</TableData>
                <TableData>{comment}</TableData>
                <TableData
                  style={{
                    color: type ? "#24CCA7" : "#FF6596",
                    fontWeight: 700,
                  }}
                >
                  {sum}
                </TableData>
                <TableData>
                  <EditIcon onClick={edit} />
                </TableData>
                <TableData>
                  <TableButton variant="contained" onClick={remove}>
                    Remove
                  </TableButton>
                </TableData>
              </BodyTableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        <AddTransaction>
          Add your first transaction.
          <AddTransactionButton />
        </AddTransaction>
      )}
    </ContainerMui>
  );
};
export default HorizontalTable;
