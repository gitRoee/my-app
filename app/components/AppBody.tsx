import { View, StyleSheet, Dimensions } from "react-native";
import AddIcon from "../../assets/addIcon";
import CardsContainer from "./CardsContainer";
import BottomContainer from "./BottomContainer";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const containerH = windowHeight * 0.6;
const containerW = windowWidth * 0.6;

const styles = StyleSheet.create({
    container: {
        width: containerW,
        height: containerH
    },
});

const AppBody = () => {

    return (
        <View style={styles.container}>
            <CardsContainer />
            <BottomContainer />
        </View>
    )
};

export default AppBody;