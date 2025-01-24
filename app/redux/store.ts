import {configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import movieReducer from './slices/movieSlice';
import commentReducer from './slices/commentSlice';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: movieReducer,
        comments: commentReducer,
        favorite: favoriteReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type RootState = ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;
