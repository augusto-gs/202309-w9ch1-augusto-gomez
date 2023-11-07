import FilmsPage from "./FilmsPage";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../mocks/utils/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Given a FilmsPage page", () => {
  describe("When it renders", () => {
    test("Then it should show on screen the title Movie List on a heading", () => {
      const expectedTitle = "Movies list";

      renderWithProviders(
        <BrowserRouter>
          <FilmsPage />
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
