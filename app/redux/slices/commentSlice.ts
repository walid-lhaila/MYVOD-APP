import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getMovieById} from "@/app/redux/slices/movieSlice";
import {rc2} from "node-forge";
import startEncrypting = module

interface CommentState {
    isLoading: boolean;
    error: string | null;
}

const initialState: CommentState = {
    isLoading: false,
    error: null,
};

interface CommentData {
    movieId: string;
    commentId: string;
    comment: string;
}

export const addComment = createAsyncThunk(
    "comments/addComment",
    async ({ movieId, comment, token }: CommentData & { token: string }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_NEST_URL}/api/createComment/${movieId}`,
                { comment },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch(getMovieById(movieId));
            return response.data.movie;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async ({movieId, commentId, token}: CommentData& {token: string}, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.delete(`${process.env.EXPO_PUBLIC_NEST_URL}/api/deleteComment/${movieId}/${commentId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            dispatch(getMovieById(movieId));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
)

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addComment.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteComment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteComment.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    },
});

export default commentSlice.reducer;
