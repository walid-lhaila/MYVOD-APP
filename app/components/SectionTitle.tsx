import React from 'react';
import {Text, View} from "react-native";

function SectionTitle({title}) {
    return (
        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, fontFamily: 'serif'}}>{title}</Text>
        </View>
    );
}

export default SectionTitle;