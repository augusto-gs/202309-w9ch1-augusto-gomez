import Films from "../../store/features/types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  movie: Films;
}

const CharacterCard = ({
  movie: { name, year, image_url, duration },
}: CharacterCardProps) => (
  <CharacterCardStyled className="movie">
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
  </CharacterCardStyled>
);

export default CharacterCard;
