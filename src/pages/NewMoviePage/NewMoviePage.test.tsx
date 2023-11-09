import { screen } from "@testing-library/react";
import NewMoviePage from "./NewMoviePage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { renderWithProviders } from "../../mocks/utils/test-utils";

describe("Given a NewMoviePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Create your own movie' title on a heading", () => {
      const title = "Create your own movie";

      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <NewMoviePage />
        </ThemeProvider>,
      );

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
