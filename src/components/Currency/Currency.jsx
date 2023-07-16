// import StyledFormBlurBackground from "../Background/FormBlurBackground";
// import Section from "../StyledSection/StyledSection";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import { ReactComponent as Triangles } from "../images/triangles.svg";

const tableHead = ["Currency", "Purchase", "Sale"];

const rows = [
  { currency: "USD", purchase: 27.55, sale: 27.65 },
  { currency: "EUR", purchase: 27.55, sale: 27.65 },
];
const BackgroundImage = styled.div`
  background-image: url("${Triangles}");
`;

const TableStyledContainer = styled(Table)`
  width: 100%;
  min-width: 280px !important;
  max-width: 400px !important;
  background-color: #4a56e2;
  margin-top: 32px;
  border-radius: 30px;
  ${BackgroundImage} {
    width: 100%;
    height: 100%;
  }
`;
const TableRowStyled = styled(TableCell)`
  color: #ffffff !important;
`;

const Currency = () => {
  return (
    <TableStyledContainer sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHead.map((item) => {
            return <TableRowStyled key={item}>{item}</TableRowStyled>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          return (
            <TableRow key={row.currency}>
              <TableRowStyled>{row.currency}</TableRowStyled>
              <TableRowStyled>{row.purchase}</TableRowStyled>
              <TableRowStyled>{row.sale}</TableRowStyled>
            </TableRow>
          );
        })}
      </TableBody>
    </TableStyledContainer>
  );
};

export default Currency;
