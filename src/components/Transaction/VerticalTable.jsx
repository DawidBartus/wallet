import styled from "styled-components";
import { Button } from "@mui/material";
import { ReactComponent as EditIcon } from "../images/edit.svg";
import React from "react";
import { useSelector } from "react-redux";
import AddTransaction from "../StyledComponents/AddTransaction";
import EditTransaction from "../EditTransaction/EditTransaction";

const TableContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 60vh;
  overflow-x: auto;
  margin-top: 32px;
  width: 100%;
  min-width: 282px;
  max-width: 400px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 282px;
  max-width: 400px;
  display: block;
  border-collapse: collapse;
`;

const Th = styled.th`
  position: relative;
  border-bottom: 1px solid #dcdcdf;
  text-align: left;
  color: #000;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow: hidden;
  padding-left: 8px;
  height: 47px;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background-color: ${({ type }) =>
      type === "true" ? "#24CCA7" : "#FF6596"};
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #dcdcdf;
  padding: 8px;
  text-align: end;
  padding-right: 20px;
  color: #000;
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
`;
const TableButton = styled(Button)`
  color: #fff !important;
  text-align: center !important;
  font-family: Circe !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;
  border-radius: 18px !important;
  text-transform: none !important;
  width: 67px;
  height: 26px;
`;
const TableRow = styled.tr`
  background-color: #fff;
  border-radius: 10px !important;
  overflow: hidden;
  &.firstOfTh th {
    border-top-left-radius: 10px;
  }
  &.firstOfTh td {
    border-top-right-radius: 10px;
  }
  &.lastOfTh th {
    border-bottom-left-radius: 10px;
  }
  &.lastOfTh td {
    border-bottom-right-radius: 10px;
  }
`;

const VerticalTable = (props) => {
  const dataObject = useSelector((state) => state.transaction.transactions);
  const { edit, remove, open, close } = props;
  return (
    <TableContainer>
      {dataObject.length ? (
        <Table>
          <tbody>
            {dataObject.map(({ date, type, category, comment, sum, id }) => {
              const typeToString = type.toString();

              return (
                <React.Fragment key={id}>
                  <TableRow className="firstOfTh">
                    <Th type={typeToString}>Date:</Th>
                    <Td>{date}</Td>
                  </TableRow>
                  <TableRow type={type.toString()}>
                    <Th type={typeToString}>Type:</Th>
                    <Td>{type ? "+" : "-"}</Td>
                  </TableRow>
                  <TableRow>
                    <Th type={typeToString}>Category:</Th>
                    <Td>{category}</Td>
                  </TableRow>
                  <TableRow>
                    <Th type={typeToString}>Comment:</Th>
                    <Td>{comment}</Td>
                  </TableRow>
                  <TableRow>
                    <Th type={typeToString}>Sum:</Th>
                    <Td>{sum}</Td>
                  </TableRow>
                  <TableRow className="lastOfTh BodyTableRow" id={id}>
                    <Th style={{ border: "0" }} type={typeToString}>
                      <TableButton variant="contained" onClick={remove}>
                        Delete
                      </TableButton>
                    </Th>
                    <Td style={{ border: "0" }} onClick={edit}>
                      <EditIcon /> Edit
                    </Td>
                  </TableRow>
                  <tr style={{ height: "20px" }}></tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <AddTransaction>Add your first transaction.</AddTransaction>
      )}
    </TableContainer>
  );
};

export default VerticalTable;
