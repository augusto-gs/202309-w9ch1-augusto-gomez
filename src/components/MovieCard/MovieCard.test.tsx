import { screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { movieMock } from "../../mocks/movieMock";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { renderWithProviders } from "../../mocks/utils/test-utils";

describe("Given a MovieCard component", () => {
  describe("When it receives the movie Shawsank redemption", () => {
    test("Then it should show its title on a heading", () => {
      const expectedTitle = "The Dark Knight";

      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <MovieCard movie={movieMock} />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
