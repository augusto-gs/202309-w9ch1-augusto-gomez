import { useCallback } from "react";
import Films from "../store/features/types";

const useMovieApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async () => {
    const response = await fetch(apiUrl);
    const films = (await response.json()) as Films[];
    return films;
  }, [apiUrl]);

  return { getFilms };
};

export default useMovieApi;
