import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import UseUserData from "@/app/hooks/useUserData";
import {addFavorite} from "@/app/redux/slices/favoriteSlice";

interface FavoriteButtonProps {
    movieId: string;
}

function FavoriteButton({movieId}: FavoriteButtonProps) {
    const dispatch = useDispatch();
    const currentUser = UseUserData();
    const token = currentUser?.token;

    const handleAddFavorite = async () => {
        try {
            await dispatch(addFavorite({ movieId, token }));
            console.log('FAVORITE ADDED SUCCESSFULLY');
        } catch (error) {
            console.log(error || 'FAILED TO ADD FAVORITE');
        }
    };
    return (
        <View>
            <TouchableOpacity onPress={handleAddFavorite} style={styles.button2}>
                <Ionicons name={"add-sharp"} color="white" size={24} />
                <Text style={styles.buttonText2}>List</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        width: '95%',
        margin: 'auto',
        backgroundColor: "#454545",
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    buttonText2: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
})
export default FavoriteButton;