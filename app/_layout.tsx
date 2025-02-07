import { Stack } from "expo-router";
import { AppState, Image, Platform } from "react-native";
import logo from "../assets/images/net.png";
import { ReduxProvider } from "@/app/redux/provider";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { useEffect } from 'react';

export default function RootLayout() {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        })
    });

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            if (token) {
                console.log('Push notification token:', token);
            }
        });

        const interval = setInterval(() => {
            schedulePushNotification();
        }, 2 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    async function registerForPushNotificationsAsync() {
        let token;

        if (Platform.OS === "android") {
            await Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#FF231F7C",
            });
        }

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== "granted") {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification!");
                return;
            }

            if (Constants.easConfig?.projectId) {
                token = (
                    await Notifications.getExpoPushTokenAsync({
                        projectId: Constants.easConfig.projectId,
                    })
                ).data;
                console.log(token);
            }
        } else {
            alert("Must use physical device for Push Notifications");
        }

        return token;
    }

    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "We miss you! 🔔",
                body: 'It\'s been a while since you opened the app. Come back and check out what\'s new!',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 * 60 },
        });
    }

    return (
        <ReduxProvider>
            <Stack>
                <Stack.Screen name="(tab)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                    headerTitle: () => (
                        <Image source={logo} style={{ width: 100, height: 60, resizeMode: "contain" }} />
                    ),
                }}
                />
                <Stack.Screen name="register" options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                    headerTitle: () => (
                        <Image source={logo} style={{ width: 100, height: 60, resizeMode: "contain" }} />
                    ),
                }}
                />
            </Stack>
        </ReduxProvider>
    );
}