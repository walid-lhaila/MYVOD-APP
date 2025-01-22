import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function CommentsInput() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Ionicons name={"chatbox-sharp"} color={"white"} size={29} />
            <TextInput keyboardType="default" placeholder="Wrtie Comment ..."  placeholderTextColor="white" style={styles.input} />
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