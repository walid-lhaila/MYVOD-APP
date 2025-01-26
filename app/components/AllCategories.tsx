import {Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllCategories} from "@/app/redux/slices/categorySlice";

function AllCategories({visible, onClose, onPress}) {

    const dispatch = useDispatch();
    const {categories}  = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    if (!visible) return null;
    return (
        <TouchableWithoutFeedback onPress={onClose} >
            <View style={styles.overlay}>
                <View style={styles.content} onStartShouldSetResponder={(e) => {e.stopPropagation(); return false}}>
                    <ScrollView>
                        {categories.map((category) => (
                            <TouchableWithoutFeedback key={category._id}>
                                <View style={styles.categoryItem}>
                                    <Text onPress={onPress} style={styles.categoryText}>{category.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                    </ScrollView>
                        <Pressable onPress={onClose} style={{backgroundColor: 'white', width: 60, height: 60, borderRadius: 50, margin: 'auto', alignItems: 'center', justifyContent: 'center'}}>
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
        marginTop: 25,
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