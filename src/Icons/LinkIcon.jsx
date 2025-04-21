import React from "react";
import { Svg, Path } from "@react-pdf/renderer";
import { style } from "../Styles";

const LinkIcon = () => (
  <Svg
    viewBox={style.icon.viewBox}
    width={style.icon.size}
    height={style.icon.size}
  >
    <Path
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      stroke={style.icon.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default LinkIcon;
