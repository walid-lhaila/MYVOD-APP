import React from 'react';
import {Image, Text, View} from "react-native";
import ghosted from "@/assets/images/ghosted.png";
import {Ionicons} from "@expo/vector-icons";

function SearchCardResult({title, picture}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between', paddingVertical: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={picture} style={{width: 130, height: 75, borderRadius: 5}} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19, fontFamily: 'serif'}}>{title}</Text>
            </View>
            <View style={{backgroundColor: 'black', borderWidth: 1, borderColor: 'gray', borderRadius: 50, paddingHorizontal: 4, paddingVertical: 4}}>
                <Ionicons name={"play-sharp"} color={'white'} size={20} />
            </View>
        </View>
    );
}

export default SearchCardResult;