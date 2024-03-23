import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const AllowedIcon = () => (
  <Svg width={50} height={50} fill="none">
    <Rect width={50} height={50} fill="#fff" rx={25} />
    <Path
      stroke="#E5E178"
      strokeLinecap="round"
      strokeWidth={8}
      d="M39.547 15.11c-.36-.02-.44.472-.563.625-.582.722-1.097 1.46-1.64 2.196-1.452 1.965-3.219 3.774-4.736 5.714-1.503 1.922-2.752 3.879-4.498 5.707-.988 1.034-1.844 2.125-2.872 3.15-.802.799-1.628 1.588-2.383 2.4-.593.638-1.367-.929-1.639-1.23-1.087-1.206-1.762-2.437-2.614-3.685-.374-.547-.698-1.117-1.102-1.657-.18-.242-.442-.775-.758-.92"
    />
  </Svg>
)
export default AllowedIcon;
