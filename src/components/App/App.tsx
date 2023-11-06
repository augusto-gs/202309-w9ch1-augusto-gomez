import FilmsPage from "../../pages/FilmsPage";
import { Routes, Route, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/films" />} />
          <Route path="/films" element={<FilmsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
