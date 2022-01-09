import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/logo.png" style={{height: '32px'}}/>
  );
};

export default Icon;
