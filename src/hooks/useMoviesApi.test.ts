import useMovieApi from "./useMoviesApi";
import { charactersMock } from "../mocks/charactersMock";
import { renderHook } from "@testing-library/react";

describe("Given a useMoviesApi hook", () => {
  describe("When it fetches the information of two movies ", () => {
    test("Then it should show the information of The Shawshank Redemption and The Godfather", async () => {
      const expectedMovies = charactersMock;

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
