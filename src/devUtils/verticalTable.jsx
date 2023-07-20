import styled from "styled-components";
import dataObjects from "../components/Transaction/devObject";

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
  text-align: left;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  width: 100px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const VerticalHeaderTable = () => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataObjects.map(({ date, type, category, comment, sum }) => (
            <>
              <tr>
                <Th>Date:</Th>
                <Td>{date}</Td>
              </tr>
              <tr>
                <Th>Type:</Th>
                <Td>{type ? "+" : "-"}</Td>
              </tr>
              <tr>
                <Th>Category:</Th>
                <Td>{category}</Td>
              </tr>
              <tr>
                <Th>Comment:</Th>
                <Td>{comment}</Td>
              </tr>
              <tr style={{ marginBottom: "20px" }}>
                <Th>Sum:</Th>
                <Td>{sum}</Td>
              </tr>
              <td>
                <button>Remove</button>
              </td>
              <td>
                <button>edit</button>
              </td>
              <div style={{ height: "20px" }}></div>
            </>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default VerticalHeaderTable;
