import useMovieApi from "./useMoviesApi";
import { moviesMock } from "../mocks/moviesMock";
import { renderHook } from "@testing-library/react";

describe("Given a useMoviesApi hook", () => {
  describe("When it fetches the information of two movies ", () => {
    test("Then it should show the information of The Shawshank Redemption and The Godfather", async () => {
      const expectedMovies = moviesMock;

      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useMovieApi());

      const currentMovies = await getFilms();

      expect(currentMovies).toStrictEqual(expectedMovies);
    });
  });
});
