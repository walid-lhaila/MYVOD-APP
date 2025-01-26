import React from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView, StyleSheet} from "react-native";
import bg from "@/assets/images/bg.jpeg";
import {Ionicons} from "@expo/vector-icons";

export default function CategoryCardResult() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            {/* Movie 1 */}
            <View style={styles.card}>
                <Image source={bg} style={styles.image} />
                <Text style={styles.title}>Code Name Triranga</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name={"add-circle-outline"} color={"white"} size={25} />
                        <Text style={styles.actionText}>My List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name={"information-circle-outline"} color={"white"} size={25} />
                        <Text style={styles.actionText}>Info</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    card: {
        width: 310,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#1a1a1a",
    },
    image: {
        width: "100%",
        height: 450,
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
    },
    actionButton: {
        alignItems: "center",
    },
    actionText: {
        color: "white",
        fontSize: 14,
        marginTop: 5,
    },
});
