import styled, { css } from 'styled-components';
import { mixins } from '../../styles/responsive';

interface ILandingPageStyleProps {
  isMain?: boolean;
}

export const Content = styled.div`
  width: 100%;
  height: 100%;
  text-align: -webkit-center;
`;

export const MainSection = styled.div`
  background: linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
  width: 100%;
  text-align: -webkit-center;
  position: relative;
  z-index: -1;

  ${mixins.lg(css`
    min-height: 616px;
  `)}
`;

export const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 0;
  left: 0;

  height: 100%;
`;

export const TwoColumnsSection = styled.div<ILandingPageStyleProps>`
  width: ${({ isMain }) => isMain ? '95%' : '90%'};
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;

  img {
    width: 304px;
  }

  .alert-nanny {
    display: none;

    ${mixins.sm(css`
      display: flex;
    `)}
  }

  ${({ isMain }) => mixins.sm(css`
    padding-top: 100px;
    padding-bottom: 130px;
    width: ${isMain ? '85%' : '65%'};
    display: flex;
    justify-content: space-between;
    text-align: left;

    img {
      width: 584px;
    }
  `)}
`

export const SectionInfo = styled.div`
  width: 95%;

  h1 {
    font-size: 28px;
    line-height: 32px;
  }
  h3 {
    font-size: 16px;
    line-height: 28px;
  }

  ${mixins.md(css`
    width: 55%;

    h1 {
      font-size: 40px;
      line-height: 48px;
    }
    h3 {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`

export const PlayButton = styled.div`
  display: flex;
  align-items: center;
  top: calc(50% - 24px/2 - 1744px);

  a {
    margin-left: 16px;
    color: #ffffff;
    font-weight: bold;

    :hover {
      cursor: pointer;
    }
  }
`;

export const NanyAvailableSection = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 28px 0 28px 0;

  .nanny-container {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;

    a {
      display: block;
      margin-left: 10px;
    }
    span {
      color: #000000;
      margin-left: 5px;
    }
  }

  ${mixins.md(css`
    padding: 28px;

    .nanny-container {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `)}
`;

export const SectionsContainer = styled.div`
  width: 100%;
  border-top: 1px solid #DFDFDF;
  background-color: #F2F2F2;
  text-align: -webkit-center;

  hr {
    color: #DFDFDF;
    width: 85%;
  }

  .nanny-table {
    display: none;
  }

  ${mixins.md(css`
    .nanny-table {
      display: block;
    }

    hr {
      width: 50%;
    }
  `)}
`;

export const InfoParagraph = styled.div`
  color: #3D3D3D;
  font-weight: bold;
  width: 90%;

  h4 {
    font-size: 22px;
    line-height: 32px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: #4A4A4A;
    margin-bottom: 40px;
  }

  ${mixins.md(css`
    width: 40%;

    h4 {
      font-size: 28px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 40px;
    }
  `)}
`;

export const OneColumnSection = styled.div`
  color: #3D3D3D;
  padding: 16px;
  display: block;

  h4 {
    font-size: 22px;
    line-height: 32px;
  }

  h5 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    max-width: 784px;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    margin-top: 50px;
  }


  ${mixins.md(css`
    padding: 64px;
  `)}
`;

export const FooterContainer = styled.div`
`;