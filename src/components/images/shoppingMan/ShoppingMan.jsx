import React from "react";
import { ReactComponent as CardIcon } from "./card.svg";
import { ReactComponent as Flower } from "./flower.svg";
import { ReactComponent as IconDollar } from "./iconDollar.svg";
import { ReactComponent as SmallDot } from "./underFlowerDot.svg";
import { ReactComponent as BigDot } from "./underManDot.svg";
import { ReactComponent as IconCart } from "./iconShoppingCart.svg";
import { ReactComponent as ShoppingManSvg } from "./shoppingMan.svg";
import { ReactComponent as Phone } from "./phone.svg";

const ShoppingMen = ({ isMobile }) => {
  const transformStyle = isMobile ? `scale(1.67)` : `scale(1)`;
  const svgWidth = isMobile ? 435 : 260;
  const svgHeight = isMobile ? 420 : 250;
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{ transition: "width 1s, height 1s" }}
    >
      <g transform={transformStyle}>
        <SmallDot x="0.72" y="221.87" />
        <BigDot x="35.34" y="221.04" />
        <CardIcon x="160.51" y="0" />
        <Flower x="0" y="116.04" />
        <IconDollar x="216.07" y="101.97" />
        <IconCart x="12" y="64.66" />
        <Phone x="49.88" y="12.69" />
        <ShoppingManSvg x="88.69" y="32.13" />
      </g>
    </svg>
  );
};

export default ShoppingMen;
