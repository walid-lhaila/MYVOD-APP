import React from 'react';
import { Image } from 'expo-image';
import { View, StyleSheet, Pressable } from "react-native";
import logo from '../../assets/images/netIcon.png';

function MoviesCard({ src, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Image source={{uri:src}} style={styles.image} />
                <Image source={logo} style={{ width:20, height: 20, position: 'absolute', top: 2}} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
    },
    image: {
        position: "relative",
        width: 100,
        height: 160,
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
});

export default MoviesCard;
