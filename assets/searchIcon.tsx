import * as React from "react"
import Svg, { G, Ellipse, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SearchIcon = () => (
  <Svg width={28} height={26} fill="none">
    <G filter="url(#a)">
      <Ellipse cx={19} cy={9} fill="#D9D9D9" rx={8} ry={9} />
    </G>
    <Path
      stroke="#CEBE2F"
      strokeLinecap="round"
      strokeWidth={3}
      d="M13 15 2 24"
    />
    <Path
      fill="#CEBE2F"
      d="M12.142 14.828a9 9 0 1 1 1.386 1.317l.732-.955a7.796 7.796 0 1 0-1.201-1.141l-.917.779Z"
    />
    <Defs></Defs>
  </Svg>
)
export default SearchIcon;
