import { Button } from "@mui/material";
import styled from "styled-components";

export const TableHead = styled.thead`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const Table = styled.table`
  border-spacing: 0;
  padding-left: 10px;
`;

export const HeaderTableRow = styled.tr`
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
export const BodyTableRow = styled.tr`
  :first-child td {
    padding-top: 16px;
    padding-bottom: 14px;
  }
`;

export const TableHeading = styled.th`
  padding: 16px 0px 15px 0;
`;
export const TableData = styled.td`
  &:first-child {
    padding-left: 10px;
  }
  &:last-child {
    text-align: center;
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
export const TableButton = styled(Button)`
  color: #fff !important;
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 18px !important;
  margin-left: 8px !important;
  text-transform: none !important;
`;
