import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
}; 

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;