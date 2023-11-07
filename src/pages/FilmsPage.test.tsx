import FilmsPage from "./FilmsPage";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../mocks/utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

describe("Given a FilmsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show on screen the name of The Shawshank Redemption and The Godfather on a heading", async () => {
      const expectedTitle = "The Shawshank Redemption";

      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <FilmsPage />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const title = await screen.findByText(expectedTitle);
      const altText = await screen.findByAltText(`Poster for ${expectedTitle}`);

      expect(title).toBeInTheDocument();
      expect(altText).toBeInTheDocument();
    });
  });
});