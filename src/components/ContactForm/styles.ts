import styled, { css } from "styled-components";
import { mixins } from "../../styles/responsive";

export const Form = styled.div`
  display: block;
  justify-content: space-evenly;
  align-items: center;

  input {
    min-width: 328px;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px 20px 14px 20px;
    margin-bottom: 10px;

    &.error {
      border-color: red;
      ::placeholder {
        color: red;
      }
    }
  }

  button {
    min-width: 328px;
    display: block;
    background: #00A870;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    padding: 14px 24px 14px 24px;
    cursor: pointer;
    margin-bottom: 30px;

    :hover {
      opacity: 0.9;
    }
  }

  ${mixins.sm(css`
    display: flex;
    width: 35%;

    input {
      margin: 0;
      min-width: 232px;
    }

    button {
      min-width: 96px;
      margin-bottom: 0;
    }
  `)}
`;