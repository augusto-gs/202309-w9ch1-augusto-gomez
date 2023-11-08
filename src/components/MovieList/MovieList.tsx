import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import useMovieApi from "../../hooks/useMoviesApi";
import { useEffect } from "react";
import { loadFilms, setSeenStatus } from "../../store/features/slices";
import { useDispatch } from "react-redux";
import Films from "../../store/features/types";
import MovieCard from "../MovieCard/MovieCard";
import MovieListStyled from "./MovieListStyled";

const MovieList = (): React.ReactElement => {
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
    <MovieListStyled>
      {films.films.map((movie: Films) => (
        <li className="movies-list__item" key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </MovieListStyled>
  );
};

export default MovieList;
