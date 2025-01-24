import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {addComment} from "@/app/redux/slices/movieSlice";
import UseUserData from "@/app/hooks/useUserData";

interface CommentsInputProps {
    movieId: string;
}

function CommentsInput({movieId}: CommentsInputProps) {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const currentUser = UseUserData();
    const token = currentUser?.token;

    const handleAddComment = async () => {
        if(!comment.trim()) {
            Alert.alert("Error", 'Comment Cannot Be Empty');
            return;
        }
        try {
            await dispatch(addComment({ movieId, comment, token})).unwrap();
            setComment('');
            console.log('Comment Added Successfully');
        } catch (error) {
            console.log(error || "Failed to add comment.");
        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingHorizontal: 10, gap: 5}}>
            <TextInput keyboardType="default" placeholder="Write Comment ..."  placeholderTextColor="white" value={comment} onChangeText={setComment} style={styles.input} />
            <Pressable onPress={handleAddComment}>
                <Ionicons name={"send-sharp"} color={"white"} size={29} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '85%',
        margin: 'auto',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        color: 'white',
    },
})
export default CommentsInput;