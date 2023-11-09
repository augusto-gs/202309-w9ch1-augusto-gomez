import styled from "styled-components";

const FormStyled = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 6px 11px 11px 0px;
  border-radius: 33px;
  width: 287px;
  padding: 20px;

  input {
    padding: 4px;
    margin: 10px 0;
  }

  #hasBeenSeen {
    padding: 0;
    margin: 0;
  }

  .form {
    &__label {
      width: 70%;
      font-size: 20px;
    }

    &__button {
      font-family: inherit;
      background-color: transparent;
      border: solid;
      padding: 10px 40px;
      font-size: 20px;
      border-radius: 33px;
    }
  }

  .checkbox {
    background-color: #ebe533;
    padding: 15px;
    border-radius: 33px;
    box-shadow: 1px 0px 11px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default FormStyled;
