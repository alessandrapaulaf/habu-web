import styled from 'styled-components';

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

  min-height: 616px;
`;

export const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const Header = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 5% 20% 10% 10% 50%;
  align-items: center;
  width: 100%;
  top: 0;
  padding: 0 20px 0 20px; 

  font-size: 14px;
  line-height: 20px;
  text-align: center;

  svg {
    height: 74px;
    width: auto;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
  }
`;

export const ActionButtons = styled.div`
  justify-self: right;

  button {
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
    margin-left: 23px;
  }
`;

export const TwoColumnsSection = styled.div<ILandingPageStyleProps>`
  width: ${({ isMain }) => isMain ? '85%' : '65%'};
  text-align: left;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 130px;
  justify-content: space-between;
`

export const SectionInfo = styled.div`
  width: 55%;

  h1 {
    font-size: 40px;
    line-height: 48px;
  }
  h3 {
    font-size: 18px;
    line-height: 24px;
  }
`

export const PlayButton = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #ffffff;
    font-weight: bold;
    margin-left: 16px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const NanyAvailableSection = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 28px;

  .nanny-container {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;

    a {
      margin-left: 10px;
    }
    span {
      color: #000000;
      margin-left: 5px;
    }
  }

`;

export const SectionsContainer = styled.div`
  width: 100%;
  border-top: 1px solid #DFDFDF;
  background-color: #F2F2F2;
  text-align: -webkit-center;

  hr {
    color: #DFDFDF;
    width: 50%;
  }

`;

export const InfoParagraph = styled.div`
  color: #3D3D3D;
  font-weight: bold;
  width: 40%;

  h4 {
    font-size: 28px;
    line-height: 32px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: #4A4A4A;
    margin-bottom: 40px;
  }
`;

export const OneColumnSection = styled.div`
  color: #3D3D3D;
  padding: 64px;
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
`;

export const FooterContainer = styled.div`
`;