import React from 'react';
import * as S from './styles';

import Banner from '../../assets/images/banner.png';
import {ReactComponent as HapuLogo} from '../../assets/icons/logo.svg';

export default function LandingPage() {
  return (
    <S.Content>
      <S.MainSection>
        <S.BannerImage src={Banner} />
        <S.Header>
          <HapuLogo />
          <a href="/">Create Your Nanny Share</a>
          <a href="/">Browse Shares</a>
          <a href="/">Our Story</a>
          <S.ActionButtons>
            <button>Become a Nanny Share Host</button>
            <a href="/">Sign In</a>
          </S.ActionButtons>
        </S.Header>

        
      </S.MainSection>


      <S.Container>
      </S.Container>
    </S.Content>
  );
}