import React from 'react';
import * as S from './styles';

import {ReactComponent as HapuLogo} from '../../assets/icons/logo.svg';
import useWindowSize from '../../hooks/useWindowSize';

export default function Header(): JSX.Element {
  const { width } = useWindowSize();

  return (
    <S.Container>
      <HapuLogo />
      {
        width > 1018
        ? (
          <>
            <a href="/">Create Your Nanny Share</a>
            <a href="/">Browse Shares</a>
            <a href="/">Our Story</a>
          </>
        )
        : null
      }
      <S.ActionButtons>
        <button>Become a Nanny Share Host</button>
        {
          width > 1018
          ? <a href="/">Sign In</a>
          : null
        }
      </S.ActionButtons>
    </S.Container>
  );
}