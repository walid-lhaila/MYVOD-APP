import {Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";


const categories = [
    "Available for Download",
    "Netflix Originals",
    "TV Shows",
    "Action",
    "Anime",
    "Children & Family",
    "Classics",
    "Comedies",
    "Documentaries",
    "Dramas",
    "Horror",
    "Independent",
    "Anime",
    "Children & Family",
    "Classics",
    "Comedies",
    "Documentaries",
    "Dramas",
    "Horror",
]


function AllCategories({visible, onClose}) {

    if (!visible) return null;
    return (
        <TouchableWithoutFeedback onPress={onClose} >
            <View style={styles.overlay}>
                <View style={styles.content} onStartShouldSetResponder={(e) => {e.stopPropagation(); return false}}>
                    <ScrollView>
                        {categories.map((category, index) => (
                            <TouchableWithoutFeedback key={index}>
                                <View style={styles.categoryItem}>
                                    <Text style={styles.categoryText}>{category}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                    </ScrollView>
                        <Pressable onPress={onClose} style={{backgroundColor: 'white', width: 70, height: 70, borderRadius: 50, margin: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons name={"close-sharp"} size={35} color={"black"} />
                        </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AllCategories;


const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    content: {
        width: 250,
        height: 650,
    },
    categoryItem: {
        padding: 12,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    categoryText: {
        textAlign: 'center',
        color: "#c9c9c9",
        fontSize: 18,
    },
})