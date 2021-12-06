import styled, { css } from "styled-components";
import { mixins } from "../../styles/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  svg {
    margin-left: 16px;
    height: 74px;
    width: auto;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
  }

  ${mixins.md(css`
    display: grid;
    grid-template-columns: 5% 20% 10% 10% 50%;
    padding: 0 20px 0 20px;

    svg {
      margin: 0;
      height: 74px;
      width: auto;
    }

  `)}
`;

export const ActionButtons = styled.div`
  button {
    margin: 16px;
    background: #00A870;
    color: #ffffff;
    font-weight: 500;

    border-radius: 4px;
    padding: 12px;
    border: none;

    :hover {
      background: #049564;
      cursor: pointer;
    }
  }

  a { 
    margin: 0;
  }

  ${mixins.md(css`
    justify-self: right;
    margin-right: 40px;

    a {
      margin-left: 23px;
    }

    button {
      margin: 0;
    }
  `)}
`;