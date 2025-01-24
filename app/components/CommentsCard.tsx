import React from 'react';
import {Image, Text, View} from "react-native";
import img from '../../assets/images/user.jpeg';

function CommentsCard({comment, user}) {
    return (
        <View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, width: '85%', gap: 10, alignItems: 'center'}}>
                <Image source={img} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{user}</Text>
                    <Text style={{color: 'white', fontWeight: '100', fontSize: 11}}>{comment}</Text>
                </View>
            </View>
        </View>
    );
}

export default CommentsCard;