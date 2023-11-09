import styled from "styled-components";

const AppStyled = styled.div`
  .navigation-bar {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    gap: 20px;
    font-size: 20px;
    margin-bottom: 30px;
    &__link {
      color: inherit;
      text-decoration: none;
      &:active {
        color: red;
      }
    }
  }
  .active {
    font-weight: bold;
  }
`;

export default AppStyled;
