import React from 'react';
import {Image} from 'expo-image';
import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function SearchCardResult({title, picture}) {
    const truncateTitle = title.length > 10 ? title.substring(0, 13) + '...' : title;

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between', paddingVertical: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={{ uri: picture}} style={{width: 130, height: 75, borderRadius: 5}} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, fontFamily: 'serif'}}>{truncateTitle}</Text>
            </View>
            <View style={{backgroundColor: 'black', borderWidth: 1, borderColor: 'gray', borderRadius: 50, paddingHorizontal: 4, paddingVertical: 4}}>
                <Ionicons name={"play-sharp"} color={'white'} size={20} />
            </View>
        </View>
    );
}

export default SearchCardResult;