import React from "react";
import { Svg, Path } from "@react-pdf/renderer";
import { style } from "../Styles";

const AtIcon = () => (
  <Svg
    viewBox={style.icon.viewBox}
    width={style.icon.size}
    height={style.icon.size}
  >
    <Path
      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      stroke="#D2D2D2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default AtIcon;
