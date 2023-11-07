import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";
import useMovieApi from "../hooks/useMoviesApi";
import { useEffect } from "react";
import { loadFilms } from "../store/features/slices";
import { useDispatch } from "react-redux";

const FilmsPage = (): React.ReactElement => {
  const { getFilms } = useMovieApi();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();
      dispatch(loadFilms(currentFilms));
    })();
  }, [dispatch, getFilms]);

  const films = useAppSelector((state: RootState) => {
    return state.films;
  });

  return (
    <>
      <h1 className="list-title">Movies list</h1>
      <ul className="movies-list">
        {films.films.map((movie) => (
          <li>
            {movie.id} {movie.name} {movie.year}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmsPage;
