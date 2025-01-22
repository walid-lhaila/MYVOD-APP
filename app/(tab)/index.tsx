import {Text, View, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import netIcon from '../../assets/images/netIcon.png';
import {LinearGradient} from "expo-linear-gradient";
import FilterBar from "@/app/components/FilterBar";
import movie3 from '../../assets/images/paint.png';
import sisu from '../../assets/images/sisu.mp4';
import FiveLastMovies from "@/app/components/FiveLastMovies";
import SectionTitle from "@/app/components/SectionTitle";
import MoviesCard from "@/app/components/MoviesCard";
import {useState} from "react";
import MovieDetails from "@/app/components/MovieDetails";
import SearchComponents from "@/app/components/SearchComponents";


export default function Index() {
    const [detailsComponent, setDetailsComponent] = useState(false);
    const [search, setSearch] = useState(false);
    return (

        detailsComponent ? (
            <MovieDetails src={sisu} title="Sisu" description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" category="Crime" date="2024" close={() => setDetailsComponent(false)} />
            ) : (
                <View style={{flex: 1}}>
                    {search ? (
                        <SearchComponents close={() => setSearch(false)} />
                    ) : (
                        <LinearGradient  colors={['black', 'black']} style={styles.gradient}>
                            <View style={styles.header}>
                                <Image style={styles.logo} source={netIcon} />
                                <Pressable onPress={() => setSearch(true)}>
                                    <Ionicons name={"search-outline"} color={"white"} size={35} />
                                </Pressable>
                            </View>

                            <ScrollView>
                                <FilterBar />
                                <View style={{paddingTop: 20,}}>
                                    <FiveLastMovies />
                                    <SectionTitle title='Last Movies'/>
                                    <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5}}>
                                        <MoviesCard onPress={() => setDetailsComponent(true)} src={movie3}/>
                                    </ScrollView>
                                    <SectionTitle title='All Movies' />
                                    <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5,}}>
                                        <MoviesCard onPress={() => setDetailsComponent(true)} src={movie3}/>
                                    </ScrollView>
                                    <SectionTitle title='My List' />
                                    <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5,}}>
                                        <MoviesCard onPress={() => setDetailsComponent(true)} src={movie3}/>
                                    </ScrollView>
                                </View>

                            </ScrollView>
                        </LinearGradient>
                    )}
                </View>
            )
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
