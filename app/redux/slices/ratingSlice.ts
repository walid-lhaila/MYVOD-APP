import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface RatingState {
    isLoading: boolean;
    error: string | null;
}

const initialState: RatingState = {
    isLoading: false,
    error: null,
};

interface RatingData {
    movieId: string;
    rating: string;
    client: string;
}

export const addRating = createAsyncThunk(
    'rating/rateMovie',
    async ({movieId, rating, client, token}: RatingData & {token: string}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${process.env.EXPO_PUBLIC_NEST_URL}/api/addRating/${movieId}`,
                    { rating, client },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
)


const ratingSlice = createSlice({
    name: "rating",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addRating.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addRating.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addRating.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    },
});

export default ratingSlice.reducer;