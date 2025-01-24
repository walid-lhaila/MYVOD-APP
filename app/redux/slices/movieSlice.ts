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

interface CommentData {
    movieId: string;
    comment: string;
}


export const getAllMovies  = createAsyncThunk(
    'movies/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('http://192.168.9.132:2003/api/getAllMovies');
            const movies =  response.data.getAllMovie;
            const updatedMovies = movies.map((movie) => {
                return {
                    ...movie,
                    picture: movie.picture.replace("127.0.0.1:9000", "192.168.9.132:9000"),
                    trailer: movie.trailer.replace("127.0.0.1:9000", "192.168.9.132:9000"),
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
        try {
            const response = await axios.get(`http://192.168.9.132:2003/api/getMovieDetails/${movieId}`);
            const updatedMovieDetails =  response.data.messsage;
            updatedMovieDetails.trailer = updatedMovieDetails.trailer.replace("127.0.0.1", "192.168.9.132");
            return updatedMovieDetails;
        } catch (error) {
            return rejectWithValue(error.message || 'something Went Wrong');
        }
    }
)


export const addComment = createAsyncThunk(
    'movies/acdComment',
    async ({ movieId, comment, token }: CommentData & {token: string}, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.post(`http://192.168.9.132:2003/api/createComment/${movieId}`,
                    { comment },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            dispatch(getMovieById(movieId));
            return response.data.movie;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'something Went Wrong');
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
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action .payload as string;
            })
    },
});

export default movieSlice.reducer;

