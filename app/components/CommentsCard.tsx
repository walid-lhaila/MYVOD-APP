import React from 'react';
import {Image, Text, View} from "react-native";
import user from '../../assets/images/user.jpeg';

function CommentsCard() {
    return (
        <View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, width: '85%', gap: 10, alignItems: 'center'}}>
                <Image source={user} style={{width: 50, height: 50}} />
                <View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Walid Lhaila</Text>
                    <Text style={{color: 'white', fontWeight: '100', fontSize: 11}}>Armenia is not just a small country lost in the world, Armenia is an immortal soul, an energy that emanates from this land, sinking into your bones and giving you chills</Text>
                </View>
            </View>
        </View>
    );
}

export default CommentsCard;