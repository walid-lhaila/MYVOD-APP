import { Stack } from "expo-router";
import { Image } from "react-native";
import logo from "../assets/images/net.png";
import { ReduxProvider} from "@/app/redux/provider";

export default function RootLayout() {
    return (
        <ReduxProvider>
            <Stack>
                <Stack.Screen name="(tab)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: true,  headerStyle: { backgroundColor: "black" },  headerTintColor: "white",  headerTitle: () => (
                            <Image source={logo} style={{ width: 100, height: 60, resizeMode: "contain"}}/>),
                    }}
                />
                <Stack.Screen name="register" options={{ headerShown: true,  headerStyle: { backgroundColor: "black" },  headerTintColor: "white",  headerTitle: () => (
                            <Image source={logo} style={{ width: 100, height: 60, resizeMode: "contain"}}/>),
                    }}
                />
            </Stack>
        </ReduxProvider>
    );
}
