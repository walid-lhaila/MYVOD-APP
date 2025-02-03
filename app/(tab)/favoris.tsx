    import { View, StyleSheet, Image, ScrollView, ActivityIndicator} from "react-native";
    import netIcon from "@/assets/images/netIcon.png";
    import {Ionicons} from "@expo/vector-icons";
    import FavorisCard from "@/app/components/favorisCard";
    import {useDispatch, useSelector} from "react-redux";
    import useUserData from "@/app/hooks/useUserData";
    import React, {useEffect} from "react";
    import {getMyFavorits} from "@/app/redux/slices/favoriteSlice";

    export default function Favoris() {
        const dispatch = useDispatch();
        const currentUser = useUserData();
        const token = currentUser?.token;

        const { favorites, isLoading } = useSelector((state) => state.favorite);

        useEffect(() => {
            if(token) {
                dispatch(getMyFavorits({ token }));
            }
        }, [dispatch, token])

        if (isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={netIcon} />
                    <Ionicons name={"search-outline"} color={"white"} size={35} />
                </View>
                <ScrollView>
                    {favorites?.map((favorite) => (
                        <FavorisCard key={favorite._id} description={favorite.movie.description} title={favorite.movie.title} img={favorite.movie.picture} time={favorite.createdAt} movieId={favorite.movie._id}  />
                    ))}
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
            paddingTop: 50,
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
        loading: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        },
    });
