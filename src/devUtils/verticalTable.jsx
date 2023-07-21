import styled from "styled-components";
import dataObjects from "../components/Transaction/devObject";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button } from "@mui/material";

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
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background-color: #ff6596;
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
  &:first-child th {
    border-top-left-radius: 10px;
  }
`;

const VerticalHeaderTable = () => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataObjects.map(({ date, type, category, comment, sum }) => (
            <>
              <TableRow>
                <Th>Date:</Th>
                <Td>{date}</Td>
              </TableRow>
              <TableRow>
                <Th>Type:</Th>
                <Td>{type ? "+" : "-"}</Td>
              </TableRow>
              <TableRow>
                <Th>Category:</Th>
                <Td>{category}</Td>
              </TableRow>
              <TableRow>
                <Th>Comment:</Th>
                <Td>{comment}</Td>
              </TableRow>
              <TableRow style={{ marginBottom: "20px" }}>
                <Th>Sum:</Th>
                <Td>{sum}</Td>
              </TableRow>
              <TableRow style={{ marginBottom: "20px" }}>
                <Th style={{ border: "0" }}>
                  <TableButton variant="contained">Delete</TableButton>
                </Th>
                <Td style={{ border: "0" }}>
                  <EditOutlinedIcon /> Edit
                </Td>
              </TableRow>

              <tr style={{ height: "20px" }}></tr>
            </>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default VerticalHeaderTable;
