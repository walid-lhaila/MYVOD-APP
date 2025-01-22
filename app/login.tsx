import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "@/app/redux/slices/authSlice";


export default function Login (){
    const dispatch = useDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name: string, value: string) => {
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async () => {
        try {
            const result = await dispatch(login(formData));
            if (login.fulfilled.match(result)) {
                router.push('(tab)');
            } else {
                console.error('Login failed:', result);
            }
        } catch (err) {
            console.error('Error in handleSubmit:', err);
        }
    };

        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ width: '90%', marginHorizontal: 'auto', gap: 20, paddingTop: 100}}>
                    <TextInput onChangeText={(value) => handleChange('email', value)} value={formData.email} keyboardType="email-address" placeholder="E-mail" style={styles.input} />
                    <TextInput onChangeText={(value) => handleChange('password', value)} value={formData.password} secureTextEntry  placeholder="Password" style={styles.input} />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={{paddingTop: 20}}>
                        <Text style={styles.text}>Need help?</Text>
                        <Text  onPress={() => router.push('/register') }  style={styles.text}>New to Netflix? Sign up now.</Text>
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
        backgroundColor: '#888B90',
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
    text: {
        color: 'white',
        fontFamily: 'mono',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center',
    },
    description: {
        paddingTop: 30,
        color: '#c7c6c6',
        fontFamily: 'serif',
        fontSize: 13,
        textAlign: 'center',
    },
})