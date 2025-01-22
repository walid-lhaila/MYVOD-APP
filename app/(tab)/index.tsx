import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import netIcon from '../../assets/images/netIcon.png';
import {LinearGradient} from "expo-linear-gradient";
import FilterBar from "@/app/components/FilterBar";
import movie from '../../assets/images/dropsOfGod.png';
import movie1 from '../../assets/images/bookClub.png';
import movie2 from '../../assets/images/ghosted.png';
import movie3 from '../../assets/images/paint.png';
import movie4 from '../../assets/images/nightagent.png';
import sisu from '../../assets/images/sisu.mp4';
import FiveLastMovies from "@/app/components/FiveLastMovies";
import SectionTitle from "@/app/components/SectionTitle";
import MoviesCard from "@/app/components/MoviesCard";
import {useState} from "react";
import MovieDetails from "@/app/components/MovieDetails";


export default function Index() {
    const [detailsComponent, setDetailsComponent] = useState(false);
    return (

        detailsComponent ? (
            <MovieDetails src={sisu} title="Sisu" description="After an attempted attack on the school Budd’s kids attend, Montague worries about leaks in the department. But she may be in the line of fire herself" category="Crime" date="2024" close={() => setDetailsComponent(false)} />
            ) : (
                <LinearGradient  colors={['black', 'black']} style={styles.gradient}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={netIcon} />
                        <Ionicons name={"search-outline"} color={"white"} size={35} />
                    </View>

                    <ScrollView>
                        <FilterBar />
                        <View style={{paddingTop: 20,}}>
                            <FiveLastMovies />
                            <SectionTitle title='Last Movies' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5}}>
                                <MoviesCard onPress={() => setDetailsComponent(true)} src={movie3}/>
                                <MoviesCard src={movie2}/>
                                <MoviesCard src={movie1}/>
                                <MoviesCard src={movie}/>
                                <MoviesCard src={movie4}/>
                            </ScrollView>
                            <SectionTitle title='All Movies' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5,}}>
                                <MoviesCard src={movie3}/>
                                <MoviesCard src={movie2}/>
                                <MoviesCard src={movie1}/>
                                <MoviesCard src={movie}/>
                                <MoviesCard src={movie4}/>
                            </ScrollView>
                            <SectionTitle title='My List' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5,}}>
                                <MoviesCard src={movie3}/>
                                <MoviesCard src={movie2}/>
                                <MoviesCard src={movie1}/>
                                <MoviesCard src={movie}/>
                                <MoviesCard src={movie4}/>
                            </ScrollView>
                        </View>

                    </ScrollView>

                </LinearGradient>
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
