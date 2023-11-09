import { useCallback } from "react";
import Films, { UserFilm } from "../store/features/types";

const useMovieApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async () => {
    const response = await fetch(apiUrl);
    const films = (await response.json()) as Films[];
    return films;
  }, [apiUrl]);

  const changeSeenMovies = useCallback(
    async (movie: Films) => {
      const response = await fetch(`${apiUrl}/${movie.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ hasBeenSeen: !movie.hasBeenSeen }),
      });
      if (!response.ok) return false;
      return true;
    },
    [apiUrl],
  );

  const addMovieToApi = async (movie: UserFilm) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(movie),
    });
    if (!response.ok) return false;
    return true;
  };

  return { getFilms, changeSeenMovies, addMovieToApi };
};

export default useMovieApi;
