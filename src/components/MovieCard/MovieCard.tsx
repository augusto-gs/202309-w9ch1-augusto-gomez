import { useDispatch } from "react-redux";
import Films from "../../store/features/types";
import MovieCardStyled from "./MovieCardStyled";
import { useCallback } from "react";
import { setSeenStatus } from "../../store/features/slices";

interface MovieCardProps {
  movie: Films;
}

const MovieCard = ({
  movie: { name, year, image_url, duration, id, hasBeenSeen },
}: MovieCardProps) => {
  const dispatch = useDispatch();

  const changeSeenStatus = useCallback(() => {
    dispatch(setSeenStatus(id));
  }, [dispatch, id]);

  return (
    <MovieCardStyled className="movie">
      <img
        className="movie__image"
        src={`${image_url}`}
        alt={`Poster for ${name}`}
        width={350}
        height={500}
      />
      <h2 className="movie__name">{name}</h2>
      <div className="movie__info-container">
        <span className="movie__year">{`Year: ${year}`}</span>
        <span className="movie__duration">{`Duration: ${duration}`}</span>
        <label htmlFor="seen">
          Seen
          <input type="checkbox" name="seen" onChange={changeSeenStatus} />
        </label>
        <span>{hasBeenSeen ? "Vista" : "No vista"}</span>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
