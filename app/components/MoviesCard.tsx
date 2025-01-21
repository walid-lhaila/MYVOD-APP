import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Image} from "react-native";
import logo from '../../assets/images/netIcon.png';

function MoviesCard({ src }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={src} style={styles.image} imageStyle={styles.imageBorder}>
                <Image source={logo} style={{width: 30, height: 30, position: 'absolute', top: 0}} />
            </ImageBackground>
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
    },
    imageBorder: {
        borderRadius: 5,
    },
});

export default MoviesCard;
