import {ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import bg from '../assets/images/bg.jpeg';
import {useRouter} from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={bg} style={styles.backgroundImage} resizeMode="cover">
                <LinearGradient colors={['transparent', 'black']} style={styles.gradient}>
                <View style={styles.content}>
                    <View style={{ justifyContent: 'center', }}>
                        <Text style={styles.title}>Streaming All Movie On The Go</Text>
                        <Text style={styles.description}>No matter what your mood or preference, flixaura has the perfect movie or show to match.</Text>
                        <TouchableOpacity onPress={() => router.push('/login')} style={styles.signInButton}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/register') } style={styles.signUpButton}>
                            <Text style={styles.signUpbuttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
    },
    title: {
        color: 'white',
        fontFamily: 'mono',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    description: {
        paddingTop: 10,
        color: 'white',
        fontFamily: 'serif',
        fontSize: 13,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        bottom: 50,
        position: "absolute",
        width: '100%'
    },
    signInButton: {
        marginTop: 20,
        backgroundColor: "red",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 20,
        width: '90%',
        margin: 'auto'
    },
    signUpButton: {
        marginTop: 20,
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 20,
        width: '90%',
        margin: 'auto'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    signUpbuttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
});
