import Films from "../../store/features/types";
import MovieCardStyled from "./MovieCard.test";

interface MovieCardProps {
  movie: Films;
}

const MovieCard = ({
  movie: { name, year, image_url, duration },
}: MovieCardProps) => (
  <MovieCardStyled className="movie">
    <img
      className="movie__image"
      src={`${image_url}`}
      alt={`Poster for ${name}`}
      width={350}
      height={500}
    />
    <h1 className="movie__name">{name}</h1>
    <div className="movie__info-container">
      <span className="movie__year">{`Year: ${year}`}</span>
      <span className="movie__duration">{`Duration: ${duration}`}</span>
    </div>
  </MovieCardStyled>
);

export default MovieCard;
