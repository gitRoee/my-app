import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions } from 'react-native';
import Modal from "react-native-modal";

type props = {
    options: string[],
    onSelect: (option: string) => void,
    selectedOption: string;
}
const windowWidth = Dimensions.get('window').width;

const CustomDropdown = ({ options, onSelect, selectedOption }: props) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    const handleOptionSelect = (option: string) => {
        onSelect(option);
        toggleModal();
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleModal} style={styles.dropdownButton}>
                <Text style={styles.label}>{selectedOption}</Text>
            </Pressable>
            <Modal
                isVisible={isVisible}
                backdropOpacity={0}
                style={{ top: '33%' }}
                deviceWidth={windowWidth - 70}
                onBackdropPress={toggleModal}
            >
                <View style={styles.modalContent}>
                    {options.map(option => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => handleOptionSelect(option)}
                            style={styles.option}
                        >
                            <Text>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({ // todo gets padding left
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdownButton: {
        borderRadius: 5,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: '#FAF7B4',
        width: 70,
        height: 30,

    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    option: {
        padding: 10,
    },
    label: {
        color: '#CEBE2F',
        paddingLeft: 5
    }
});

export default CustomDropdown;
