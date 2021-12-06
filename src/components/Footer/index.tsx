import React from "react";
import * as S from "./styles";

import {ReactComponent as CalendarIcon} from '../../assets/icons/calendar.svg';
import {ReactComponent as HapuLogo} from '../../assets/icons/hapu-logo.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';

export default function Footer(): JSX.Element {
  return (
    <S.Container>
      <S.OneColumnSection>
        <h4>Become a nanny share host</h4>
        <span>Takes less than 5 minutes to get started</span>
        <S.ButtonCreate>
          <CalendarIcon/>
          <div className="button-info">
            <span>Create Your Nanny Share</span>
            <p>Takes less than 5 minutes</p>
          </div>
        </S.ButtonCreate>
        <a href="/">Or browse local nanny-shares</a>
      </S.OneColumnSection>
      <S.BottomActionButtons>
        <HapuLogo />
        <S.LinkGroup>
          <a href="/">Share Your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">{`Terms & Privacy`}</a>
        </S.LinkGroup>
        <S.SocialMediaGroup>
          <S.SocialMediaButton className="facebook-icon">
            <FacebookIcon />
          </S.SocialMediaButton>
          <S.SocialMediaButton>
            <TwitterIcon />
          </S.SocialMediaButton>
          <S.SocialMediaButton>
            <InstagramIcon />
          </S.SocialMediaButton>
        </S.SocialMediaGroup>
      </S.BottomActionButtons>
      <footer>Copyright © 2017 Hapu PTY Limited All rights reserved</footer>
    </S.Container>
  );
}