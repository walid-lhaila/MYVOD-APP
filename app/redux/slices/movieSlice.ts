import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface MovieState {
    movies: [];
    movieDetails: null | object;
    isLoading: boolean;
    error: string | null;
};

const initialState: MovieState = {
    movies: [],
    movieDetails: null,
    isLoading: false,
    error: null,
};


export const getAllMovies  = createAsyncThunk(
    'movies/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${process.env.EXPO_PUBLIC_NEST_URL}/api/getAllMovies`);
            const movies =  response.data.getAllMovie;
            const updatedMovies = movies.map((movie) => {
                return {
                    ...movie,
                    picture: movie.picture.replace("127.0.0.1", process.env.EXPO_PUBLIC_MINIO_URL),
                    trailer: movie.trailer.replace("127.0.0.1", process.env.EXPO_PUBLIC_MINIO_URL),
                }
            })
            return updatedMovies
        } catch (error) {
            return rejectWithValue(error.message || 'something Went Wrong');
        }
    }
)

export const getMovieById = createAsyncThunk(
    'movies/getMovieById',
    async(movieId, {rejectWithValue}) => {
        console.log(process.env.EXPO_PUBLIC_MINIO_URL)
        try {
            const response = await axios.get(`${process.env.EXPO_PUBLIC_NEST_URL}/api/getMovieDetails/${movieId}`);
            const updatedMovieDetails =  response.data.messsage;
            updatedMovieDetails.trailer = updatedMovieDetails.trailer.replace("127.0.0.1", process.env.EXPO_PUBLIC_MINIO_URL);
            return updatedMovieDetails;
        } catch (error) {
            return rejectWithValue(error.message || 'something Went Wrong');
        }
    }
)




const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(getMovieById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movieDetails = action.payload;
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    },
});

export default movieSlice.reducer;

