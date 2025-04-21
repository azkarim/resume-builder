import React from "react";
import { Svg, Path } from "@react-pdf/renderer";
import { style } from "../Styles";

const LocationIcon = () => (
  <Svg
    viewBox={style.icon.viewBox}
    width={style.icon.size}
    height={style.icon.size}
  >
    <Path
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke={style.icon.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      stroke={style.icon.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default LocationIcon;
