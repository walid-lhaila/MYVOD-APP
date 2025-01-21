import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                headerStyle: {
                    backgroundColor: "gray",
                },
                headerShadowVisible: false,
                headerTintColor: "black",
                tabBarStyle: {
                    backgroundColor: "black",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="latestMovies"
                options={{
                    title: "New",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "tv-sharp" : "tv-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favoris"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "heart-sharp" : "heart-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Account",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "person-sharp" : "person-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
