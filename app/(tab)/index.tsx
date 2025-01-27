import {View, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import netIcon from '../../assets/images/netIcon.png';
import {LinearGradient} from "expo-linear-gradient";
import FilterBar from "@/app/components/FilterBar";
import movie3 from '../../assets/images/paint.png';
import FiveLastMovies from "@/app/components/FiveLastMovies";
import SectionTitle from "@/app/components/SectionTitle";
import MoviesCard from "@/app/components/MoviesCard";
import React, {useEffect, useState} from "react";
import MovieDetails from "@/app/components/MovieDetails";
import SearchComponents from "@/app/components/SearchComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "@/app/redux/slices/movieSlice";
import {useNavigation} from "expo-router";
import {getMyFavorits} from "@/app/redux/slices/favoriteSlice";
import useUserData from "@/app/hooks/useUserData";
import AllCategories from "@/app/components/AllCategories";
import CategoryComponents from "@/app/components/CategoryComponents";

export default function Index() {
    const [detailsComponent, setDetailsComponent] = useState(false);
    const [search, setSearch] = useState(false);
    const [categoryComponents,  setCategoryComponents] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const currentUser = useUserData();
    const token = currentUser?.token;
    const { movies } = useSelector((state) => state.movies);
    const { favorites } = useSelector((state) => state.favorite);
    const [categoriesVisible, setCategoriesVisible] = useState(false);

    const toggleCategoriesContent = () => {
        setCategoriesVisible(!categoriesVisible);
    }

    useEffect(() => {
        if(token) {
            dispatch(getMyFavorits({ token }));
        }
    }, [dispatch, token])

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = navigation.addListener("tabPress", () => {
            setDetailsComponent(false);
            setSearch(false);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        detailsComponent ? (
            <MovieDetails movieId={selectedMovieId} close={() => { setDetailsComponent(false); setSelectedMovieId(null); }}
            />
        ) : search ? (
            <SearchComponents allMovies={movies} close={() => setSearch(false)} onMovieSelect={(movieId) => { setDetailsComponent(true); setSelectedMovieId(movieId); setSearch(false);}}
            />
        ) : categoryComponents ? (
            <CategoryComponents selectedCategory={selectedCategory} removeCategories={() => setCategoriesVisible(false)} close={() => setCategoryComponents(false)} />
        ) : (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['gold', 'black']} style={styles.gradient}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={netIcon} />
                        <Pressable onPress={() => setSearch(true)}>
                            <Ionicons name={"search-outline"} color={"white"} size={35} />
                        </Pressable>
                    </View>

                    <AllCategories onPress={(selectedCategoryName) => {setCategoryComponents(true); setSelectedCategory(selectedCategoryName)}} visible={categoriesVisible} onClose={() => setCategoriesVisible(false)}/>

                    <ScrollView>
                        <FilterBar onPrese={toggleCategoriesContent} />
                        <View style={{ paddingTop: 20 }}>
                            <FiveLastMovies />
                            <SectionTitle title='Last Movies' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5 }}>
                                <MoviesCard onPress={() => setDetailsComponent(true)} src={movie3}/>
                            </ScrollView>

                            <SectionTitle title='All Movies' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5 }}>
                                {movies.map((movie) => (
                                    <MoviesCard
                                        key={movie._id}
                                        onPress={() => {
                                            setDetailsComponent(true);
                                            setSelectedMovieId(movie._id);
                                        }}
                                        src={movie.picture}
                                    />
                                ))}
                            </ScrollView>

                            <SectionTitle title='My List' />
                            <ScrollView horizontal style={{ paddingTop: 10, paddingHorizontal: 5 }}>
                                {favorites?.map((favorite) => (
                                    <MoviesCard key={favorite._id} onPress={() => { setDetailsComponent(true); setSelectedMovieId(favorite.movie._id);}}
                                        src={favorite.movie.picture}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                    </ScrollView>
                </LinearGradient>
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
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
});
