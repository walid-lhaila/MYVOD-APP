import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
    name: string;
    phone: string;
    email: string;
    password: string;
}

interface AuthState {
    user: null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
}
export const register = createAsyncThunk(
    'auth/register',
    async(userData: UserData, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://192.168.1.4:2003/api/create', userData);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw rejectWithValue(error.message || 'Something went wrong');
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload as string || 'Registration Failed';
            });
    },
});

export default authSlice.reducer;