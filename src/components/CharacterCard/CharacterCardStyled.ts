import { styled } from "styled-components";

const CharacterCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 33px;
  margin: 20px;
  box-shadow: 6px 11px 11px 0px;

  .movie__image {
    border-radius: 33px 33px 0 0;
    object-fit: cover;
  }

  .movie__name {
    padding: 10px;
  }

  .movie__info-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export default CharacterCardStyled;
