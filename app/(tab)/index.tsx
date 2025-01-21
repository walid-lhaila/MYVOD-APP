import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import netIcon from '../../assets/images/netIcon.png';
import {LinearGradient} from "expo-linear-gradient";
import FilterBar from "@/app/components/FilterBar";
import bg from '../../assets/images/bg.jpeg';
import FiveLastMovies from "@/app/components/FiveLastMovies";

export default function Index() {
    return (
        <LinearGradient  colors={['gold', 'black']} style={styles.gradient}>
            <View style={styles.header}>
                <Image style={styles.logo} source={netIcon} />
                <Ionicons name={"search-outline"} color={"white"} size={35} />
            </View>
            <FilterBar />
            <ScrollView>
                <FiveLastMovies />
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: 'black',
        opacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    logo: {
        width: 60,
        height: 60
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
    },
});
