import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import netIcon from "@/assets/images/netIcon.png";
import {Ionicons} from "@expo/vector-icons";
import movie from '../../assets/images/ghosted.png';
import movie1 from '../../assets/images/from.png';
import movie2 from '../../assets/images/hypnotic.png';
import movie4 from '../../assets/images/guardiansOfTheGalaxy.png';
import movie3 from '../../assets/images/january6TH.png';
import FavorisCard from "@/app/components/favorisCard";

export default function Favoris() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={netIcon} />
                <Ionicons name={"search-outline"} color={"white"} size={35} />
            </View>
            <ScrollView>
                <FavorisCard description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" title="Ghosted" img={movie} time="120m"  />
                <FavorisCard description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" title="Ghosted" img={movie2} time="120m"  />
                <FavorisCard description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" title="Ghosted" img={movie1} time="120m"  />
                <FavorisCard description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" title="Ghosted" img={movie3} time="120m"  />
                <FavorisCard description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" title="Ghosted" img={movie4} time="120m"  />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
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
});
