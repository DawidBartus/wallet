import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Triangles } from "../images/triangles.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const rows = [
  { currency: "USD", purchase: 27.55, sale: 27.65 },
  { currency: "EUR", purchase: 27.55, sale: 27.65 },
];

const TableStyledContainer = styled.ul`
  list-style: none;
  padding: 0px;
  width: 100%;
  max-width: 440px;
  background-color: #4a56e2;
  margin-top: 32px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;

  li:first-child {
    background-color: rgb(255 255 255 / 22%);
    margin-bottom: 16px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    height: 100%;
  }
  @media (min-width: 768px) {
    min-height: 210px;
    height: calc(100vh - 390px);
    max-height: 550px;
  }
  @media (max-width: 480px) {
    display: none;
    height: 0;
    min-height: 210px;
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480 && locationCurrency) {
        navigate("/home");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, locationCurrency]);

  console.log(locationCurrency);
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