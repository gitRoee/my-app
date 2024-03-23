import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const NotAllowedIcon = () => (
    <Svg width={50} height={50} fill="none">
        <Rect width={50} height={50} fill="#fff" rx={25} />
        <Path
            stroke="#E5E178"
            strokeLinecap="round"
            strokeWidth={8}
            d="m14 14 22.246 20.127M15 35.213 36.213 14"
        />
    </Svg>
)
export default NotAllowedIcon;
