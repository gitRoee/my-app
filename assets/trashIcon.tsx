import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TrashIcon = () => (
  <Svg width={29} height={29} fill="none">
    <Path
      stroke="#CEBE2F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 11.22v15.799"
    />
    <Path stroke="#CEBE2F" strokeWidth={2} d="M5.25 27.019h18.684" />
    <Path
      stroke="#CEBE2F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M24.118 11v15.979M19.555 13.97v8.675M9.555 13.97v8.675M14.555 13.97v8.675M1 10h27M1 7.021 28 7"
    />
    <Path
      fill="#CEBE2F"
      d="M22 6c0-1.591-.79-3.117-2.197-4.243C18.397.632 16.49 0 14.5 0c-1.99 0-3.897.632-5.303 1.757C7.79 2.883 7 4.41 7 6h2.235c0-1.117.555-2.188 1.542-2.978.988-.79 2.327-1.234 3.723-1.234s2.735.444 3.723 1.234c.987.79 1.542 1.86 1.542 2.978H22Z"
    />
  </Svg>
)
export default TrashIcon;
