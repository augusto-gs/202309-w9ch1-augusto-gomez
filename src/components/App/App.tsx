import FilmsPage from "../../pages/FilmsPage";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import NewMoviePage from "../../pages/NewMoviePage/NewMoviePage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => (
  <AppStyled>
    <nav className="navigation-bar">
      <NavLink className="navigation-bar__link" to="/new-movie">
        <span className="navigation-bar__form">Add movies</span>
      </NavLink>
      <NavLink className="navigation-bar__link" to="/films">
        <span className="navigation-bar__home">Home</span>
      </NavLink>
    </nav>
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
