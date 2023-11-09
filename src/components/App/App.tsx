import FilmsPage from "../../pages/FilmsPage";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import FormPage from "../../pages/FormPage/FormPage";

const App = (): React.ReactElement => (
  <div className="container">
    <nav className="navigation-bar">
      <NavLink to="/form">
        <span className="navigation-bar__form">Form</span>
      </NavLink>
      <NavLink to="/">
        <span className="navigation-bar__home">Home</span>
      </NavLink>
    </nav>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
