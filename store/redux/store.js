import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from '../redux/favorite'

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
});