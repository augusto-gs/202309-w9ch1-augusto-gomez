import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";
import useMovieApi from "../hooks/useMoviesApi";
import { useEffect } from "react";
import { loadFilms } from "../store/features/slices";
import { useDispatch } from "react-redux";
import FilmsPageStyled from "./FilmsPageStyled";
import Films from "../store/features/types";
import MovieCard from "../components/MovieCard/MovieCard";

const FilmsPage = (): React.ReactElement => {
  const { getFilms } = useMovieApi();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();
      dispatch(loadFilms(currentFilms));
    })();
  }, [dispatch, getFilms]);

  const films = useAppSelector((state: RootState) => state.films);

  return (
    <FilmsPageStyled className="container">
      <h1 className="list-title">Movies list</h1>
      <ul className="movies-list">
        {films.films.map((movie: Films) => (
          <li className="movies-list__item" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </FilmsPageStyled>
  );
};

export default FilmsPage;
