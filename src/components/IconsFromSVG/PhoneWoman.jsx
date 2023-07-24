import React from "react";
import { ReactComponent as IconDollar } from "../images/shoppingManSVGs/iconDollar.svg";
import { ReactComponent as Flower } from "../images/womanSVG/bigFlower.svg";
import { ReactComponent as ListIcon } from "../images/womanSVG/list.svg";
import { ReactComponent as PhoneIcon } from "../images/womanSVG/phone.svg";
import { ReactComponent as DotIcon } from "../images/womanSVG/underWomanDot.svg";
import { ReactComponent as WomanIcon } from "../images/womanSVG/woman.svg";
import styled from "@emotion/styled";

const StyledSVG = styled.svg`
  transition: width 1s, height 1s;

  @media (max-width: 1278px) {
    width: 100%;
    max-width: 260px;
    height: 250px;
  }

  @media (min-width: 1279px) {
    width: 100%;
    max-width: 435px;
    height: 420px;
    overflow: visible;
  }
`;
const StyledGroup = styled.g`
  @media (max-width: 1278px) {
    scale: 1;
  }
  @media (min-width: 1279px) {
    scale: 1.67;
  }
`;

const PhoneWoman = () => {
  return (
    <StyledSVG>
      <StyledGroup>
        <DotIcon x="22.84" y="215.46" />
        <IconDollar x="212.43" y="0" />
        <Flower x="14.66" y="57.83" />
        <PhoneIcon x="76.28" y="3.33" />
        <WomanIcon x="165.92" y="20.59" />
        <ListIcon x="23.99" y="124.52" />
      </StyledGroup>
    </StyledSVG>
  );
};

export default PhoneWoman;
