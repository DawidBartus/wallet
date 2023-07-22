import ContainerMui from "../StyledComponents/ContainerMUI";
// import dataObjects from "./devObject";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../images/edit.svg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import AddTransaction from "../StyledComponents/AddTransaction";

const TableHead = styled.thead`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Table = styled.table`
  border-spacing: 0;
  padding-left: 10px;
`;

const HeaderTableRow = styled.tr`
  background-color: #fff;
  th:first-child {
    padding-left: 10px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  th:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;
const BodyTableRow = styled.tr`
  :first-child td {
    padding-top: 16px;
    padding-bottom: 14px;
  }
`;

const TableHeading = styled.th`
  padding: 16px 0px 15px 0;
`;
const TableData = styled.td`
  &:first-child {
    padding-left: 10px;
  }
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #dcdcdf;
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

const HorizontalTable = (props) => {
  const dataObject = useSelector((state) => state.transaction);
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
        <AddTransaction>Add your first transaction.</AddTransaction>
      )}
    </ContainerMui>
  );
};
export default HorizontalTable;
