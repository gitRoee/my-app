import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text, Pressable, Animated } from "react-native";
import AllowedIcon from "../../assets/allowedIcon";
import RightArrowIcon from "../../assets/RightArrowIcon";
import NotAllowedIcon from "../../assets/notAllowedIcon";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const cardsContainerH = windowHeight * 0.1;
const cardsContainerW = windowWidth * 0.6;

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: cardsContainerW,
        height: cardsContainerH,
        backgroundColor: '#FFFFFF',
    },
    textContainer: {
        display: 'flex',
        marginLeft: 20,
    },
    cardTitle: {
        color: '#CEBE2F',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardText: {
        color: '#CEBE2F',
        fontSize: 16,
        marginTop: 10
    },
    divider: {
        backgroundColor: '#E5E178',
        width: cardsContainerW,
        height: 2
    },
    cardActions: {
        marginLeft: 45
    },
    chosenIndication: {
        backgroundColor: '#E5E178',
        height: 60,
        width: 20,
        borderRadius: 60,
        position: 'absolute'
    },
    viewWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

type props = {
    allowedDate: Date;
    coolDown: number
}

// possibly use memo on this

const AmIAllowedCard = () => {
    const isAllowed = false;

    //todo simple date logic calc

    const touch = useRef(new Animated.Value(0)).current;

    const flingGestureRight = Gesture
        .Fling()
        .runOnJS(true)
        .shouldCancelWhenOutside(true)
        .direction(Directions.RIGHT)
        .onEnd(() => {
            Animated.timing(touch, {
                toValue: 20,
                useNativeDriver: false
            }).start()
            // put in list
        })

    const flingGestureLeft = Gesture
        .Fling()
        .runOnJS(true)
        .shouldCancelWhenOutside(true)
        .direction(Directions.LEFT)
        .onEnd(() => {
            Animated.timing(touch, {
                toValue: 0,
                useNativeDriver: false
            }).start()
            // remove from list
        })

    const composed = Gesture.Exclusive(flingGestureLeft, flingGestureRight)

    return (
        <GestureDetector gesture={composed}>
            <View style={styles.viewWrapper}>
                <View style={{ ...styles.chosenIndication }} />
                <Animated.View
                    style={{ ...styles.cardContainer, transform: [{ translateX: touch }] }}
                >
                    {
                        isAllowed ? <AllowedIcon /> : <NotAllowedIcon />
                    }
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>
                            Title
                        </Text>
                        <Text style={styles.cardText}>
                            Once A Day
                        </Text>
                    </View>
                    <Pressable style={styles.cardActions}>
                        {
                            isAllowed ?
                                <RightArrowIcon /> :
                                <AnimatedCircularProgress
                                    size={40}
                                    width={5}
                                    fill={30}
                                    tintColor="#CEBE2F"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#B3CEBE2F"
                                />
                        }
                    </Pressable>
                </Animated.View>
            </View>
        </GestureDetector >
    )
};

export default AmIAllowedCard;