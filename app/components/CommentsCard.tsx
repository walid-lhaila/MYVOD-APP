import React, {useState} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from "react-native";
import img from '../../assets/images/user.jpeg';
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import UseUserData from "@/app/hooks/useUserData";
import {deleteComment} from "@/app/redux/slices/commentSlice";

interface CommentCardProps {
    comment: string;
    user: string;
    movieId: string;
    commentId: string;
}

function CommentsCard({comment, user, movieId, commentId}: CommentCardProps) {
    const dispatch = useDispatch();
    const currentUser = UseUserData();
    const token = currentUser?.token;
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await dispatch(deleteComment({movieId, commentId, token})).unwrap();
            console.log('COMMENT DELETED SUCCESSFULLY');
        } catch (error) {
            console.log("Error", error || "Failed to delete comment");
        } finally {
            setIsDeleting(false);
        }
    }
    return (
        <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', width: '95%'}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, gap: 10, alignItems: 'center'}}>
                <Image source={img} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{user}</Text>
                    <Text style={{color: 'white', fontWeight: '100', fontSize: 11}}>{comment}</Text>
                </View>
            </View>
            <Pressable onPress={handleDelete}>
                {isDeleting ? (
                    <ActivityIndicator size="small" color="red" />
                ) : (
                    <Ionicons name={"trash-sharp"} color={"red"} size={23} />
                )}
            </Pressable>
        </View>
    );
}

export default CommentsCard;