import styled from "styled-components";

const NewMoviePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .form-title {
    font-size: ${({ theme }) => theme.tipography.size};
    text-align: center;
  }
`;
export default NewMoviePageStyled;
