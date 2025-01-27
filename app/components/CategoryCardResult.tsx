import React, {useState} from 'react';
import {Image} from 'expo-image';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import {useFavorite} from "@/app/hooks/useFavorite";
import MovieDetails from "@/app/components/MovieDetails";

export default function CategoryCardResult({ selectedCategory, onShowDetails }) {
    const {handleAddFavorite} = useFavorite();
    const {movies} = useSelector((state) => state.movies);
    const filteredMovies = selectedCategory ? movies.filter((movie) => movie.categories.some((category) => category.name === selectedCategory)) : movies;

    return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {filteredMovies.map((movie) => (
                    <View key={movie._id} style={styles.card}>
                        <Image source={{uri: movie.picture}} style={styles.image} />
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => handleAddFavorite(movie._id)} style={styles.actionButton}>
                                <Ionicons name={"add-circle-outline"} color={"white"} size={25} />
                                <Text style={styles.actionText}>My List</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onShowDetails(movie)} style={styles.actionButton}>
                                <Ionicons name={"information-circle-outline"} color={"white"} size={25} />
                                <Text style={styles.actionText}>Info</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    card: {
        width: 310,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#1a1a1a",
    },
    image: {
        width: "100%",
        height: 450,
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
    },
    actionButton: {
        alignItems: "center",
    },
    actionText: {
        color: "white",
        fontSize: 14,
        marginTop: 5,
    },
});
