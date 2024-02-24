import * as React from "react"
import { Dimensions } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg"
const windowHeight = Dimensions.get('window').height; // index assets and send the same props to each svg

const BotAppBar = (props: SvgProps) => (
    <Svg {...props} fill="none" preserveAspectRatio="xMinYMin slice" style={{
        position: 'absolute', top: windowHeight - 118, zIndex: 0
    }}>
        <Path fill="#E5E178" d="M0 0h360v86H0z" />
        <Path fill="#fff" d="M360 0H0v11h71l66 6 93-3 130-3V0Z" />
        <Path
            fill="#FAF7B4"
            d="M42 4.5C29.5 5.5 8.5 2 0 2v16.5c88.5-6 129.089-2.328 137 4 20 16 101.5-3.917 103-4 18.167-1 32.646-6.23 49 0 10.5 4 18.092 2.802 33.5 0 11-2 29-3 37.5 4v-18C340.5 7 316.782 11.346 296.5 7c-14-3-19.5-8.5-56.5-2.5l-.198.032C213.511 8.796 147.812 19.45 137 7.5c-9.5-10.5-47.5-6-95-3Z"
        />
    </Svg>
)
export default BotAppBar
