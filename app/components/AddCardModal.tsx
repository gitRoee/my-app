import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { usePortalContext } from '../hooks/usePortal';
import { useState } from 'react';
import CustomDropdown from './Dropdown';
import EditIcon from '../../assets/editIcon';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const containerH = windowHeight * 0.2;

const styles = StyleSheet.create({
    input: {
        height: 28,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#FAF7B4',
        color: '#CEBE2F'
    },
    textInputLabel: {
        color: '#CEBE2F',
        position: 'absolute',
        zIndex: 3,
        bottom: 20,
        left: 20
    },
    modalContainer: {
        backgroundColor: 'white',
        elevation: 7,
        borderRadius: 30,
        height: containerH,
        flexDirection: 'column',
        display: 'flex',
        padding: 30
    },
    scheduleContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textLabel: {
        color: '#CEBE2F',
    },
    actionContainer: {
        marginTop: 10,
        alignSelf: 'flex-end'
    }
});

const AddCardModal = () => {
    const { closeModal } = usePortalContext();
    const [text, setText] = useState('');
    const [selectedTimeUnit, setSelectedTimeUnit] = useState("1");
    const [selectedTimePeriod, setSelectedTimePeriod] = useState('Day');

    return (
        <Modal isVisible backdropOpacity={0} onBackdropPress={closeModal} avoidKeyboard>
            <View style={styles.modalContainer}>
                <View>
                    <Text style={styles.textInputLabel}>To:</Text>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                    />
                </View>
                <View style={styles.scheduleContainer}>
                    <Text style={styles.textLabel}>Once</Text>
                    <CustomDropdown options={['2', '1']} onSelect={(option) => setSelectedTimeUnit(option)} selectedOption={selectedTimeUnit} />
                    <CustomDropdown options={['Days', 'Months']} onSelect={(option) => setSelectedTimePeriod(option)} selectedOption={selectedTimePeriod} />
                </View>
                <View style={styles.actionContainer}>
                    <EditIcon />
                </View>
            </View>
        </Modal>
    );
};

export default AddCardModal;