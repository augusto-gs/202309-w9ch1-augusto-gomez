import MovieList from "../components/MovieList/MovieList";
import FilmsPageStyled from "./FilmsPageStyled";

const FilmsPage = (): React.ReactElement => {
  return (
    <FilmsPageStyled>
      <h1 className="list-title">Movies list</h1>
      <MovieList />
    </FilmsPageStyled>
  );
};

export default FilmsPage;
