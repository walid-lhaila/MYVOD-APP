import React from 'react';
import { Image } from 'expo-image';
import {Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getMyFavorits} from "@/app/redux/slices/favoriteSlice";
import UseUserData from "@/app/hooks/useUserData";

interface FavorisCardProps {
    movieId: string;
    title: string;
    time: string;
    description: string;
    img: string;
}

function FavorisCard({title, time, description, img, movieId}: FavorisCardProps) {
    const formattedDate = new Date(time).toISOString().split('T')[0].replace(/-/g, '/');
    const truncatedDescription = description.length > 200 ? description.substring(0, 120) + '...' : description;
    const truncateTitle = title.length > 10 ? title.substring(0, 13) + '...' : title;

    const dispatch = useDispatch();
    const currentUser = UseUserData();
    const token = currentUser?.token;

    const handleDelete = async () => {
        try {
            await dispatch(deleteFavorite({movieId, token})).unwrap();
            console.log('FAVORITE DELETED SUCCESSFULLY');
            await dispatch(getMyFavorits({ token }));
        } catch (error) {
            console.log("Error", error || "Failed to delete favorite");
        }
    }
    return (
        <View style={{paddingVertical: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingTop: 0}}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <Image source={{ uri: img }} style={{width: 150, height: 85, resizeMode: 'cover'}} />
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'serif', fontSize: 13}}>{truncateTitle}</Text>
                        <Text style={{color: '#BCC6CC', fontWeight: 'medium', fontFamily: 'serif', fontSize: 12}}>{formattedDate}</Text>
                    </View>
                </View>
                <Pressable onPress={handleDelete}>
                    <Ionicons name={"trash-sharp"} color={"white"} size={23} />
                </Pressable>
            </View>
                <Text style={{color: '#BCC6CC', paddingHorizontal: 10, paddingTop: 3, fontSize: 12}}>{truncatedDescription}</Text>
        </View>
    );
}

export default FavorisCard;