import { Dimensions, StatusBar, View, StyleSheet, Text } from 'react-native';
import Home from './pages/Home';
import TopAppBar from '../assets/topAppBar';
import { useEffect } from 'react';
import BotAppBar from '../assets/botAppBar';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        position: 'relative'
    },
    body: {
        height: '67%'
    },
    topAppBar: {
        height: '22%'
    },
    botAppBar: {
        height: '15%'
    }
});

const index = () => {
    useEffect(() => {
        StatusBar.setBackgroundColor('#E5E178');
        StatusBar.setBarStyle('light-content');
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topAppBar}>
                <TopAppBar viewBox={`0 0 360 ${windowHeight}`} />
            </View >
            <View style={styles.body}>
                <Text>Test</Text>
            </View>
            <View style={styles.botAppBar}>
                <BotAppBar viewBox={`0 0 360 ${windowHeight}`} />
            </View >
        </View >
    )
};

export default index;