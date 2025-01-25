import { Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {AirbnbRating} from "react-native-ratings";

function RatingCard({visible, onClose, defaultRating = 3}) {
    if (!visible) return null;

    return (
        <TouchableWithoutFeedback onPress={onClose} >
            <View style={styles.overlay}>
                <View style={styles.card} onStartShouldSetResponder={(e) => {e.stopPropagation(); return false}}>
                    <Text style={styles.title}>Rate This Movie</Text>
                    <View style={styles.starsContainer}>
                           <AirbnbRating count={5} defaultRating={defaultRating}  size={24} showRating={false} isDisabled={false} starContainerStyle={styles.star} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default RatingCard;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    card: {
        backgroundColor: '#1c1c1c',
        width: '80%',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'georgia'
    },
    subtitle: {
        fontSize: 14,
        color: '#b0b0b0',
        marginBottom: 20,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
    },
    star: {
        fontSize: 30,
        color: 'gold',
    },
});
