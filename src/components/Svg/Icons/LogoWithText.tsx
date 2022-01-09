import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <span style={{marginLeft: '5px', color: textColor}}>DEFA</span>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
