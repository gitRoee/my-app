import { Dimensions, StatusBar, View, StyleSheet, Text } from 'react-native';
import Home from './pages/Home';
import TopAppBar from '../assets/topAppBar';
import { useEffect } from 'react';
import BotAppBar from '../assets/botAppBar';

const windowHeight = Dimensions.get('window').height; // export this 
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: windowHeight,
    },
    text: {
        marginTop: windowHeight - (windowHeight - 160),
    }
});

const index = () => {

    useEffect(() => {
        StatusBar.setBackgroundColor('#E5E178');
    }, [])

    return (
        <View style={styles.container}>
            <TopAppBar viewBox={`0 0 360 ${windowHeight}`} />
            <Text style={styles.text}>Test</Text>
            <BotAppBar viewBox={`0 0 360 ${windowHeight}`} />
        </View >
    )
};

export default index;