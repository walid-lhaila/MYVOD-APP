import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserData {
    name: string;
    phone: string;
    email: string;
    password: string;
}

interface LoginData {
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
            const response = await axios.post(`${process.env.EXPO_PUBLIC_NEST_URL}/api/create`, userData);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw rejectWithValue(error.message || 'Something went wrong');
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async(loginData: LoginData, {rejectWithValue}) => {
        try {
            console.log(process.env.EXPO_PUBLIC_NEST_URL)
            const response = await axios.post(`${process.env.EXPO_PUBLIC_NEST_URL}/api/login`, loginData);
            const {token, user} = response.data;
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('user', user.name);
            AsyncStorage.setItem('id', user._id);
            AsyncStorage.setItem('lastActiveAt', user.lastActiveAt);
            return { token, user };
        } catch (error) {
            console.error('Error:', error);
            throw rejectWithValue(error.message || 'Something Went Wrong');
        }
    }
)


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
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    },
});

export default authSlice.reducer;