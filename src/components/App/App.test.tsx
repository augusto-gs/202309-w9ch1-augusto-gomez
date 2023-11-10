import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/utils/test-utils";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When it renders on screen", () => {
    test("Then it should show a 'Movie list' title on a heading", () => {
      const expectedFilmPageTitle = "Movies list";

      renderWithProviders(
        <MemoryRouter initialEntries={["/films"]}>
          <App />
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", {
        name: expectedFilmPageTitle,
      });

      expect(title).toBeInTheDocument();
    });

    describe("When it renders on screeen and the user redirect to NewMoviePage", () => {
      test("Then it should show a 'Create your own movie' title on a heading", () => {
        const expectedNewMoviePage = "Create your own movie";

        renderWithProviders(
          <ThemeProvider theme={mainTheme}>
            <MemoryRouter initialEntries={["/new-movie"]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>,
        );

        const title = screen.getByRole("heading", {
          name: expectedNewMoviePage,
        });

        expect(title).toBeInTheDocument();
      });
    });
  });
});
