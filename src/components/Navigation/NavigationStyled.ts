import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 30px;
  .navigation-bar__link {
    color: inherit;
    text-decoration: none;
    &:active {
      color: red;
    }
  }

  .active {
    font-weight: bold;
  }
`;

export default NavigationStyled;
