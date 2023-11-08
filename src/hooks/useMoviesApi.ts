import { useCallback } from "react";
import Films from "../store/features/types";

const useMovieApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async () => {
    const response = await fetch(apiUrl);
    const films = (await response.json()) as Films[];
    return films;
  }, [apiUrl]);

  const changeSeenMovies = useCallback(
    async (movie: Films) => {
      await fetch(`${apiUrl}/${movie.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ hasBeenWatched: !movie.hasBeenSeen }),
      });
    },
    [apiUrl],
  );

  return { getFilms, changeSeenMovies };
};

export default useMovieApi;
