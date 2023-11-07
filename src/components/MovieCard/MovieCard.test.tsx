import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { movieMock } from "../../mocks/movieMock";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a MovieCard component", () => {
  describe("When it receives the movie Shawsank redemption", () => {
    test("Then it should show its title on a heading", () => {
      const expectedTitle = "The Shawshank Redemption";

      render(
        <ThemeProvider theme={mainTheme}>
          <MovieCard movie={movieMock} />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
