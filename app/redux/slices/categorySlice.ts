import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface CategoryState {
    categories: [];
    isLoading: boolean;
    error: string | null;
};

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: null,
};


export const getAllCategories = createAsyncThunk (
    'categories/getAll',
    async(_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${process.env.EXPO_PUBLIC_NEST_URL}/api/getAllCategories`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.message || 'something Went Wrong');
        }
    }
)

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
                state.error = null;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    },
});


export default categorySlice.reducer;