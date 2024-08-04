import { View, StyleSheet, Dimensions, Pressable } from 'react-native';
import AddIcon from '../../assets/addIcon';
import { usePortalContext } from '../hooks/usePortal';
import { useState } from 'react';
import AddCardModal from './AddCardModal';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const containerH = windowHeight * 0.6;
const bottomContainerH = containerH * 0.05;
const bottomContainerW = windowWidth * 0.76;

const styles = StyleSheet.create({
    bottomActionBarContainer: {
        height: bottomContainerH,
        width: bottomContainerW,
        display: 'flex',
        alignItems: 'flex-end',
    },
});

const BottomContainer = () => {

    const { setModal } = usePortalContext();
    const [text, setText] = useState('');

    return (
        <View style={styles.bottomActionBarContainer}>
            <Pressable onPress={() => {
                setModal(<AddCardModal />);
            }}>
                <AddIcon />
            </Pressable>
        </View>
    )
};

export default BottomContainer;