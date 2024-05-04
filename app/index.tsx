import { Dimensions, StatusBar, View, StyleSheet, DimensionValue } from 'react-native';
import TopAppBar from '../assets/topAppBar';
import { useEffect } from 'react';
import BotAppBar from '../assets/botAppBar';
import AppBody from './components/AppBody';
import Portal from './hooks/usePortal';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const bodyHeight: DimensionValue = windowHeight * 0.67;
const topAppBarHeight: DimensionValue = windowHeight * 0.22;
const botAppBarHeight: DimensionValue = windowHeight * 0.15;
const bodyWidth: DimensionValue = windowWidth * 1;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        position: 'relative'
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        height: bodyHeight,
        width: bodyWidth
    },
    topAppBar: {
        height: topAppBarHeight
    },
    botAppBar: {
        height: botAppBarHeight
    },
    scrollview: {
        backgroundColor: '#E5E178',
    },
});

const index = () => {
    useEffect(() => {
        StatusBar.setBackgroundColor('#E5E178');
        StatusBar.setBarStyle('light-content');
    }, []);


    return (
        <Portal>
            <View style={styles.container}>
                <View style={styles.topAppBar}>
                    <TopAppBar viewBox={`0 0 360 ${windowHeight}`} />
                </View>
                <View style={styles.body}>
                    <AppBody />
                </View>
                <View style={styles.botAppBar}>
                    <BotAppBar viewBox={`0 0 360 ${windowHeight}`} />
                </View >
            </View >
        </Portal>
    )
};

export default index;