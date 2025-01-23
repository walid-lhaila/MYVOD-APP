import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Pressable, ScrollView} from 'react-native';
import { Video } from 'expo-av';
import logo from '../../assets/images/netIcon.png';
import {Ionicons} from "@expo/vector-icons";
import CommentsCard from "@/app/components/CommentsCard";
import CommentsInput from "@/app/components/CommentsInput";
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "@/app/redux/slices/movieSlice";

function MovieDetails({close, movieId}) {
    const dispatch = useDispatch();
    const { movieDetails } = useSelector((state) => state.movies);

    useEffect(() => {
        if (movieId) {
            dispatch(getMovieById(movieId));
        }
    }, [dispatch, movieId]);


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
                    {movieDetails.categories && movieDetails.categories.length > 0 ? (
                        movieDetails.categories.map((category, index) => (
                            <Text key={index} style={{color: 'white', fontFamily: 'sans', fontSize: 17}}>{category.name}</Text>
                        ))
                    ) : (
                        <Text></Text>
                    )}
                    <View style={{backgroundColor: 'black', paddingHorizontal: 1, borderWidth: 1, borderColor: 'gray'}}>
                        <Text style={{color: 'white', fontFamily: 'sans', fontSize: 10}}>HD</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 10, gap: 8}}>
                    <TouchableOpacity  style={styles.button}>
                        <Ionicons name={"play-sharp"} color="black" size={24} />
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button2}>
                        <Ionicons name={"add-sharp"} color="white" size={24} />
                        <Text style={styles.buttonText2}>List</Text>
                    </TouchableOpacity>
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
                        <CommentsCard />
                        <CommentsCard />
                        <CommentsCard />
                        <CommentsCard />
                    </ScrollView>
                    <CommentsInput />
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


});
