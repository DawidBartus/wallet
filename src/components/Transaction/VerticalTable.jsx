import styled from "styled-components";
import dataObjects from "./devObject";
import { Button } from "@mui/material";
import { ReactComponent as EditIcon } from "../images/edit.svg";
import React from "react";

const TableContainer = styled.div`
  display: flex;
  max-height: 750px;
  overflow-x: auto;
  margin-top: 40px;
  @media (max-width: 768px) {
    max-height: 500px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  position: relative;
  border-bottom: 1px solid #dcdcdf;
  text-align: left;
  padding: 8px;
  width: 100px;
  color: #000;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow: hidden;
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
`;
const TableButton = styled(Button)`
  color: #fff !important;
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 18px !important;
`;
const TableRow = styled.tr`
  background-color: #fff;
  border-radius: 10px !important;
  overflow: hidden;
  &.firstOfTh th {
    border-top-left-radius: 10px;
  }
  &.lastOfTh th {
    border-bottom-left-radius: 10px;
  }
`;

const VerticalTable = (props) => {
  const { edit, remove } = props;
  console.log("działą");
  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataObjects.map(({ date, type, category, comment, sum }, index) => {
            const typeToString = type.toString();
            return (
              <React.Fragment key={index}>
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
                <TableRow style={{ marginBottom: "20px" }}>
                  <Th type={typeToString}>Sum:</Th>
                  <Td>{sum}</Td>
                </TableRow>
                <TableRow style={{ marginBottom: "20px" }} className="lastOfTh">
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
    </TableContainer>
  );
};

export default VerticalTable;
