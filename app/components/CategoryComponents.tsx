import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import netIcon from "@/assets/images/netIcon.png";
import {LinearGradient} from "expo-linear-gradient";
import AllCategories from "@/app/components/AllCategories";
import {Ionicons} from "@expo/vector-icons";
import CategoryCardResult from "@/app/components/CategoryCardResult";
import MovieDetails from "@/app/components/MovieDetails";

function CategoryComponents({close, selectedCategory}) {
    const [categoriesVisible, setCategoriesVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const toggleCategoriesContent = () => {
        setCategoriesVisible(!categoriesVisible);
    }

    const handleShowDetails = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseDetails = () => {
        setSelectedMovie(null);
    };

    return (
        <View style={{ flex: 1 }}>
            {selectedMovie ? (
                <MovieDetails close={handleCloseDetails} movieId={selectedMovie._id} />
            ) : (
            <LinearGradient colors={['gray', 'black']} style={styles.gradient}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={netIcon} />
                </View>

                    <View style={{flexDirection: 'row', justifyContent: 'start', paddingHorizontal: 10 , gap: 15, paddingTop: 20}}>
                        <Pressable onPress={close} style={{borderWidth: 1, borderRadius: 50, borderColor: 'white', paddingHorizontal: 5, paddingVertical: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons name={"close-sharp"} color={"white"} size={20} />
                        </Pressable>
                        <TouchableOpacity onPress={toggleCategoriesContent} style={styles.categories}>
                            <Text style={{color: 'white', fontWeight: 'medium', fontSize: 15}}>{selectedCategory}</Text>
                        </TouchableOpacity>
                    </View>
                <View>
                    <CategoryCardResult selectedCategory={selectedCategory} onShowDetails={handleShowDetails} />
                </View>
            </LinearGradient>
                )}
        </View>
    );
}

export default CategoryComponents;

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
    categories: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
})