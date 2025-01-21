import React from 'react';
import {Image, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function FavorisCard({title, time, description, img}) {
    return (
        <View style={{paddingVertical: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingTop: 0}}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <Image source={img} style={{width: 150, height: 85, resizeMode: 'cover'}} />
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'serif', fontSize: 13}}>{title}</Text>
                        <Text style={{color: '#BCC6CC', fontWeight: 'medium', fontFamily: 'serif', fontSize: 12}}>{time}</Text>
                    </View>
                </View>
                <View>
                    <Ionicons name={"remove-sharp"} color={"white"} size={25} />
                </View>
            </View>
            <Text style={{color: '#BCC6CC', paddingHorizontal: 10, paddingTop: 3, fontSize: 12}}>{description}</Text>
        </View>
    );
}

export default FavorisCard;