import { createSlice } from "@reduxjs/toolkit";

const favoriteSlices = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoriteSlices.actions.addFavorite;
export const removeFavorite = favoriteSlices.actions.removeFavorite;
export default favoriteSlices.reducer;