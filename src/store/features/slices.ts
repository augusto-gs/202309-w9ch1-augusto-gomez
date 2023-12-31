import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Films } from "./types";

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

    setSeenStatus: (
      currentState: FilmStructure,
      action: PayloadAction<number>,
    ): FilmStructure => ({
      ...currentState,
      films: currentState.films.map((movie) => ({
        ...movie,
        hasBeenSeen:
          movie.id === action.payload ? !movie.hasBeenSeen : movie.hasBeenSeen,
      })),
    }),

    addNewMovie: (
      currentState: FilmStructure,
      action: PayloadAction<Films>,
    ) => ({ ...currentState, films: [...currentState.films, action.payload] }),
  },
});

export const {
  loadFilms,
  setSeenStatus,
  addNewMovie: addNewMovieActionCreator,
} = filmsSlice.actions;

export const moviesReducer = filmsSlice.reducer;
