import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";
import useMovieApi from "../hooks/useMoviesApi";
import { useEffect } from "react";
import { loadFilms } from "../store/features/slices";
import { useDispatch } from "react-redux";
import CharacterCard from "../components/CharacterCard/CharacterCard";

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
    <section className="movies-list container">
      <h1 className="list-title">Movies list</h1>
      <ul className="movies-list">
        {films.films.map((movie) => (
          <li key={movie.id}>
            <CharacterCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilmsPage;
