import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Films from "./types";

interface FilmStructure {
  films: Films[];
}

const initialMovieState: FilmStructure = {
  films: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState: initialMovieState,
  reducers: {
    loadFilms: (
      currentState: FilmStructure,
      action: PayloadAction<Films[]>,
    ): FilmStructure => ({ ...currentState, films: action.payload }),
  },
});

export const { loadFilms } = filmsSlice.actions;

export const moviesReducer = filmsSlice.reducer;
