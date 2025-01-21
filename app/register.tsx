import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";


export default function Register (){
    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ width: '90%', marginHorizontal: 'auto', gap: 20, paddingTop: 60}}>
                <TextInput keyboardType="default" placeholder="Full Name" style={styles.input} />
                <TextInput keyboardType="phone-pad"  placeholder="Phone Number" style={styles.input}/>
                <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.input} />
                <TextInput secureTextEntry  placeholder="Password" style={styles.input} />
                <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                    <Text style={styles.text}>OR</Text>
                    <TouchableOpacity onPress={() => router.push('/login')} style={styles.signInButton}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. Learn more.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#9a9a9a',
        color: 'white',
    },
    button: {
        backgroundColor: "red",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    signInButtonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    text: {
        color: 'white',
        fontFamily: 'mono',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10
    },
    description: {
        paddingTop: 30,
        color: '#c7c6c6',
        fontFamily: 'serif',
        fontSize: 13,
        textAlign: 'center',
    },
    signInButton: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
})