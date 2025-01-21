import { Text, View, StyleSheet } from "react-native";

export default function LatestMovies() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
