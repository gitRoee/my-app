import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddIcon = () => (
  <Svg width={48} height={48} fill="none">
    <Path
      stroke="#CEBE2F"
      strokeLinecap="round"
      strokeWidth={5}
      d="M16 24h16M24 16v17"
    />
    <Path
      fill="#CEBE2F"
      d="M1.206 16.488a24 24 0 1 0 13.183-14.48l1.489 3.408a20.281 20.281 0 1 1-11.14 12.236l-3.532-1.164Z"
    />
  </Svg>
)
export default AddIcon;
