import { View, StyleSheet, Dimensions, Text, TextInput } from 'react-native';
import AmIAllowedCard from './AmIAllowedCard';
import React, { useState } from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const containerH = windowHeight * 0.6;
const containerW = windowWidth * 0.6;

const styles = StyleSheet.create({
    cardsContainer: {
        height: containerH,
        width: containerW
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const CardsContainer = () => {

    return (
        <View style={styles.cardsContainer}>
            <AmIAllowedCard />
            <AmIAllowedCard />
            <AmIAllowedCard />
            <AmIAllowedCard />
        </View>
    )
};

export default CardsContainer;