import styled, { css } from "styled-components";
import { mixins } from "../../styles/responsive";

export const Container = styled.div`
  footer {
    color: #3D3D3D;
    mix-blend-mode: normal;
    opacity: 0.6;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const BottomActionButtons = styled.div`
  width: 95%;
  margin-bottom: 90px;

  ${mixins.md(css`
    display: flex;
    width: 75%;
    justify-content: space-between;
  `)}
`;

export const OneColumnSection = styled.div`
  padding: 20px;
  text-align: -webkit-center;
  font-weight: bold;
  color: #3D3D3D;

  h4 {
    font-size: 28px;
    line-height: 32px;
  }

  span {
    font-size: 18px;
    line-height: 24px;
    margin-top: 16px;
  }

  a {
    font-weight: bold;
    margin-top: 24px;
  }

  ${mixins.md(css`
    padding: 80px 0 80px 0;
  `)}
`;

export const ButtonCreate = styled.div`
  background: #5E20A4;
  border-radius: 4px;
  max-width: 304px;
  margin-top: 32px;
  margin-bottom: 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 10px 25px 10px 25px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  .button-info {
    text-align: left;
    margin-left: 20px;

    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0;
    }

    span {
      font-size: 16px;
      line-height: 28px;
    }
  }

  ${mixins.md(css`
    padding: 20px;
  `)}
`;

export const LinkGroup = styled.div`
  display: grid;
  width: 70%;
  grid-template-columns: 50% 50%; 
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    color: #3D3D3D;
    margin-bottom: 17px;
  }

  ${mixins.md(css`
    display: flex;
    width: 40%;

    a {
      margin: 0;
    }
  `)}
`

export const SocialMediaGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;

  ${mixins.md(css`
    width: 5%;
    margin: 0;
  `)}
`;

export const SocialMediaButton = styled.div`
  border: 1px solid #DFDFDF;
  border-radius: 100%;
  padding: 15px;

  &.facebook-icon {
    padding: 15px 20px 15px 20px;
  }

  ${mixins.md(css`
    padding: 18px;
    margin-left: 10px;

    &.facebook-icon {
      padding: 18px 24px 18px 24px;
    }
  `)}
`;

