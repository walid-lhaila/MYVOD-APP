import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface FavoriteState {
    favorite: null;
    isLoading: boolean;
    error: string | null;
}

const initialState: FavoriteState = {
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
            return response.data.favorite;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

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
                state.favorite = action.payload.favorite;
                state.error = null;
            })
            .addCase(addFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default favoriteSlice.reducer;

