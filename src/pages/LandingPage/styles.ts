import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div``;

export const MainSection = styled.div`
  background: linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
  width: 100%;
  position: absolute;
`;

export const BannerImage = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  top: 0;
`;

export const Header = styled.div`
  position: absolute;
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