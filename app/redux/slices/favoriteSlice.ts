    import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
    import axios from "axios";

    interface FavoriteState {
        favorites: [];
        favorite: null;
        isLoading: boolean;
        error: string | null;
    }

    const initialState: FavoriteState = {
        favorites: [],
        favorite: null,
        isLoading: false,
        error: null,
    };

    interface FavoriteData {
        movieId: string;
    }

    export const addFavorite = createAsyncThunk(
        'favorite/addFavorite',
        async ({movieId, token}: FavoriteData & {token: string}, {rejectWithValue}) => {
            try {
                const response = await axios.post(`${process.env.EXPO_PUBLIC_NEST_URL}/api/addFavorite`,
                        { movieId },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                console.log(response.data.favorite)
                return response.data.favorite;
            } catch (error) {
                return rejectWithValue(error.response?.data || "Something went wrong");
            }
        }
    );

    export const getMyFavorits = createAsyncThunk(
        "favorite/getMyFavorits",
        async ({token}: {token: string}, {rejectWithValue}) => {
            console.log("MINIO", process.env.EXPO_PUBLIC_MINIO_URL)
            try {
                const response = await axios.get(`${process.env.EXPO_PUBLIC_NEST_URL}/api/getFavorites`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                const favorites = response.data.favorites;
                const updatedFavorites = favorites.map((favorite) => {
                    return {
                        ...favorite,
                        movie: {
                            ...favorite.movie,
                            picture: favorite.movie.picture.replace("127.0.0.1", process.env.EXPO_PUBLIC_MINIO_URL),
                        }
                    }
                })
                return updatedFavorites
            } catch (error) {
                return rejectWithValue(error.response?.data || "Something went wrong");
            }
        }
    )

    const favoriteSlice = createSlice({
        name: "favorite",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(addFavorite.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(addFavorite.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.favorite = action.payload;
                    state.error = null;
                })
                .addCase(addFavorite.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                })
                .addCase(getMyFavorits.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(getMyFavorits.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.favorites = action.payload;
                    state.error = null
                })
                .addCase(getMyFavorits.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                })
        },
    });

    export default favoriteSlice.reducer;

