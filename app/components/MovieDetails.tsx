import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Pressable, ScrollView, ActivityIndicator} from 'react-native';
import { Video } from 'expo-av';
import logo from '../../assets/images/netIcon.png';
import {Ionicons} from "@expo/vector-icons";
import CommentsCard from "@/app/components/CommentsCard";
import CommentsInput from "@/app/components/CommentsInput";
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "@/app/redux/slices/movieSlice";
import FavoriteButton from "@/app/components/FavoriteButton";


interface MovieDetailsProps {
    close: () => void;
    movieId: string;
}
function MovieDetails({close, movieId}: MovieDetailsProps) {
    const dispatch = useDispatch();
    const { movieDetails, isLoading } = useSelector((state) => state.movies);

    useEffect(() => {
        if (movieId) {
            dispatch(getMovieById(movieId));
        }
    }, [dispatch, movieId]);

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }



    if (!movieDetails) {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                    Movie details not found.
                </Text>
            </View>
        );
    }

    return (
        <View key={movieDetails._id} style={styles.container}>
            <Pressable onPress={close} style={{backgroundColor: 'black', position: 'absolute', top: 40, right: 13, zIndex: 1, borderRadius: 50, opacity: 0.8}}>
                <Ionicons name={"close-sharp"} size={27} color={"white"} />
            </Pressable>
            {movieDetails.trailer && (
                <Video
                    source={{ uri: movieDetails.trailer }}
                    style={styles.video}
                    resizeMode="stretch"
                    shouldPlay
                    isLooping
                    useNativeControls
                />
            )}
            <ScrollView>
                <View style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 3}}>
                    <Image source={logo} style={{ width: 20, height: 23}}/>
                    <Text style={{ color: 'white', fontFamily: 'serif', fontSize: 11  }}>Movies</Text>
                </View>
                <Text style={{ color: 'white', fontFamily: 'georgia', fontWeight: 900, fontSize: 22, paddingHorizontal: 10}}>{movieDetails.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, paddingTop: 5}}>
                    <Text style={{color: 'white', fontFamily: 'sans', fontSize: 17}}>2025</Text>
                    <View style={{backgroundColor: 'gray', paddingHorizontal: 1, paddingVertical: 1}}>
                        <Text style={{color: 'white', fontFamily: 'sans', fontSize: 10}}>U/A</Text>
                    </View>
                    {movieDetails.categories?.map((category) => (
                        <Text key={category._id} style={{color: 'white', fontFamily: 'sans', fontSize: 17}}>
                            {category.name}
                        </Text>
                    ))}
                    <View style={{backgroundColor: 'black', paddingHorizontal: 1, borderWidth: 1, borderColor: 'gray'}}>
                        <Text style={{color: 'white', fontFamily: 'sans', fontSize: 10}}>HD</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10, gap: 8}}>
                    <TouchableOpacity  style={styles.button}>
                        <Ionicons name={"play-sharp"} color="black" size={24} />
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                    <FavoriteButton  movieId={movieDetails._id}  />
                </View>
                <Text style={{color: 'white', paddingHorizontal: 10, paddingTop: 8, fontSize: 15}}>{movieDetails.description}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', paddingTop: 15, paddingHorizontal: 10}}>
                    <View style={{ alignItems: 'center'}}>
                        <Ionicons name={"heart-outline"} color="white" size={32} />
                        <Text style={{color: '#B6B6B4', fontSize: 16, fontFamily: 'serif'}}>Rate</Text>
                    </View>
                    <View style={{ alignItems: 'center'}}>
                        <Ionicons name={"chatbox-outline"} color="white" size={32} />
                        <Text style={{color: '#B6B6B4', fontSize: 16, fontFamily: 'serif'}}>Comment</Text>
                    </View>
                </View>
                <View style={{width: 60, height: 4, backgroundColor: 'red', marginTop: 16, marginLeft: 8}}></View>
                <View style={{ paddingVertical: 20}}>
                    <ScrollView>
                        {movieDetails.comments?.length > 0 ? (
                            movieDetails.comments.map((comment) => (
                                <CommentsCard key={comment._id} user={comment.client.name} comment={comment.comment} />
                            ))
                        ) : (
                            <Text style={{ color: 'white', paddingHorizontal: 10, fontSize: 15 }}>
                                No comments available.
                            </Text>
                        )}
                    </ScrollView>
                    <CommentsInput movieId={movieDetails._id} />
                </View>
            </ScrollView>
        </View>
    );
}

export default MovieDetails;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    video: {
        width: '100%',
        height: 300,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        width: '95%',
        margin: 'auto',
        backgroundColor: "white",
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    button2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        width: '95%',
        margin: 'auto',
        backgroundColor: "#454545",
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    buttonText2: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

});
