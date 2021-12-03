import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 35%;
  justify-content: space-evenly;
  align-items: center;

  input {
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px 20px 14px 20px;
  }

  button {
    background: #00A870;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    padding: 14px 24px 14px 24px;
    cursor: pointer;
  }
`;