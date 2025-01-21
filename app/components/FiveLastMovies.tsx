import React from 'react';
import {Image, Text, View} from "react-native";
import bg from "@/assets/images/bg.jpeg";
import {Ionicons} from "@expo/vector-icons";

function FiveLastMovies() {
    return (
        <>
            <View style={{ width: '80%', marginHorizontal: 'auto',}}>
                <Image source={bg} style={{width: '100%', height: 400,  borderWidth: 1, borderColor: 'white' }} />
                <Text style={{color: 'white', fontSize: 23, fontFamily: 'mono', textAlign: 'center', paddingVertical: 10}}>Code Name Triranga</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 60, paddingTop: 5}}>
                    <View style={{alignItems: 'center'}}>
                        <Ionicons name={"add-circle-outline"} color={"white"} size={25} />
                        <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15, textAlign: 'center'}}>My List</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Ionicons name={"information-circle-outline"} color={"white"} size={25} />
                        <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15,  textAlign: 'center'}}>Info</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default FiveLastMovies;