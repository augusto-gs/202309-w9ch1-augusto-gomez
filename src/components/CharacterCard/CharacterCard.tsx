import Films from "../../store/features/types";

interface CharacterCardProps {
  movie: Films;
}

const CharacterCard = ({ movie: { name, year } }: CharacterCardProps) => {
  return (
    <article className="movie">
      <h1 className="movie__name">{name}</h1>
      <div className="movie__info-container">
        <span className="movie__year">{year}</span>
        <span></span>
      </div>
    </article>
  );
};

export default CharacterCard;
