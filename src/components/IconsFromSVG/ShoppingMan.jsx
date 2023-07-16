import React from "react";
import { ReactComponent as CardIcon } from "../images/shoppingManSVGs/card.svg";
import { ReactComponent as Flower } from "../images/shoppingManSVGs/flower.svg";
import { ReactComponent as IconDollar } from "../images/shoppingManSVGs/iconDollar.svg";
import { ReactComponent as SmallDot } from "../images/shoppingManSVGs/underFlowerDot.svg";
import { ReactComponent as BigDot } from "../images/shoppingManSVGs/underManDot.svg";
import { ReactComponent as IconCart } from "../images/shoppingManSVGs/iconShoppingCart.svg";
import { ReactComponent as ShoppingManSvg } from "../images/shoppingManSVGs/shoppingMan.svg";
import { ReactComponent as Phone } from "../images/shoppingManSVGs/phone.svg";
import styled, { keyframes } from "styled-components";

const StyledSVG = styled.svg`
  transition: width 1s, height 1s;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 260px;
    height: 250px;
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 435px;
    height: 420px;
    overflow: visible;
  }
`;
const StyledGroup = styled.g`
  @media (max-width: 768px) {
    scale: 1;
  }
  @media (min-width: 769px) {
    scale: 1.67;
  }
`;
// const moveRightLeft = keyframes`
//   0% {
//     transform: translateX(0) translateY(0);
//   }
//   25% {
//     transform: translateX(15px) translateY(15px);
//   }
//   50% {
//     transform: translateX(0) translateY(0);
//   }
//   75% {
//     transform: translateX(-15px) translateY(-15px);
//   }
//   100% {
//     transform: translateX(0) translateY(0);
//   }
// `;
// const DollarIcon = styled(IconDollar)`
//   width: 100px;
//   height: 100px;
//   overflow: visible;
//   & path {
//     animation: ${moveRightLeft} 4s linear infinite;
//   }
// `;
const wobble = keyframes`
  0%,
  2%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }

  4% {
    transform: translateX(-30px) rotate(-6deg);
  }

  6% {
    transform: translateX(15px) rotate(6deg);
  }

  8% {
    transform: translateX(-15px) rotate(-3.6deg);
  }

  10% {
    transform: translateX(9px) rotate(2.4deg);
  }

  12% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
  14% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
`;
// 13s hold
const CardIconAnimation = styled(CardIcon)`
  overflow: visible;

  & path {
    animation: ${wobble} 15s linear infinite;
  }
`;

const ShoppingMan = () => {
  return (
    <StyledSVG>
      <StyledGroup>
        <IconDollar x="216.07" y="101.97" />
        <SmallDot x="0.72" y="221.87" />
        <BigDot x="35.34" y="221.04" />
        <CardIconAnimation x="160.51" y="0" />
        <Flower x="0" y="116.04" />
        <IconCart x="12" y="64.66" />
        <Phone x="49.88" y="12.69" />
        <ShoppingManSvg x="88.69" y="32.13" />
      </StyledGroup>
    </StyledSVG>
  );
};

export default ShoppingMan;
