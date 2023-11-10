import FilmsPage from "../../pages/FilmsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import NewMoviePage from "../../pages/NewMoviePage/NewMoviePage";
import AppStyled from "./AppStyled";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => (
  <AppStyled>
    <Navigation />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/new-movie" element={<NewMoviePage />} />
      </Routes>
    </main>
  </AppStyled>
);

export default App;
