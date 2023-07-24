import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Triangles } from "../images/triangles.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getCurrencyData from "./getCurrencyData";

const TableStyledContainer = styled.ul`
  list-style: none;
  padding: 0px;
  width: 100%;
  max-width: 393px;
  background-color: #4a56e2;
  border-radius: 30px;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  height: 100%;
  max-height: 331px;
  li:first-child {
    background-color: rgb(255 255 255 / 22%);
    margin-bottom: 16px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }

  @media (max-width: 1279px) {
    margin-top: 0;
    max-height: 182px;
  }
  @media (max-width: 767px) {
    display: none;
    margin-top: 15px;
    max-height: 174px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeaderParagraph = styled.p`
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 11px 0px 12px 0px;
  flex-basis: 33.33%;
`;
const StyledBodyParagraph = styled.p`
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 12px;
  flex-basis: 33.33%;
`;

const StyledListElement = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const TrianglesBackground = styled(Triangles)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  path {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Currency = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationCurrency = location.pathname === "/home/currency";

  // Currency widow close when on /currency path and window size is greater then mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && locationCurrency) {
        navigate("/home");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, locationCurrency]);

  const rows = getCurrencyData();

  return (
    <TableStyledContainer style={{ display: locationCurrency ? "block" : "" }}>
      <StyledListElement>
        <StyledHeaderParagraph>Currency</StyledHeaderParagraph>
        <StyledHeaderParagraph>Purchase</StyledHeaderParagraph>
        <StyledHeaderParagraph>Sale</StyledHeaderParagraph>
      </StyledListElement>
      {rows.map((item) => (
        <StyledListElement key={item.currency}>
          <StyledBodyParagraph>{item.currency}</StyledBodyParagraph>
          <StyledBodyParagraph>{item.purchase}</StyledBodyParagraph>
          <StyledBodyParagraph>{item.sale}</StyledBodyParagraph>
        </StyledListElement>
      ))}
      <TrianglesBackground />
    </TableStyledContainer>
  );
};

export default Currency;
