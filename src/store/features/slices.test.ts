import { moviesMock } from "../../mocks/moviesMock";
import { loadFilms, moviesReducer, setSeenStatus } from "./slices";
import Films from "./types";

describe("Given a moviesReducer", () => {
  const actualMovies = moviesMock;
  describe("When it receives the movie The Shawshank Redemption and The Godfather and an action to change the first movie to seen ", () => {
    test("Then it should change The Shawshank Redemption status to seen", () => {
      const previousState: { films: Films[] } = { films: actualMovies };

      const expectedMovies = moviesReducer(
        previousState,
        setSeenStatus(previousState.films[0].id),
      );

      expect(expectedMovies.films[0].hasBeenSeen).toStrictEqual(true);
    });
  });

  describe("When it receives the movie The Shawshank Redemption and The Godfather and an action to add this movies to the store", () => {
    test("Then it should add those movies to the store", () => {
      const previousState: { films: Films[] } = { films: [] };

      const expectedMovies = moviesReducer(
        previousState,
        loadFilms(moviesMock),
      );

      expect(expectedMovies.films).toStrictEqual(actualMovies);
    });
  });
});
