import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function FilterBar() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'start', paddingHorizontal: 10 , gap: 15, paddingTop: 20}}>
            <View style={styles.category}>
                <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15}}>TV Shows</Text>
            </View>
            <View style={styles.category}>
                <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15}}>Movies</Text>
            </View>
            <View style={styles.categories}>
                <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15}}>Categories</Text>
                <Ionicons name={"arrow-down"} size={15} color={"white"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    category: {
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    categories: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
})

export default FilterBar;