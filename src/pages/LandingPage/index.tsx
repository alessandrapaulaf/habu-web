import React from 'react';
import * as S from './styles';

import Nanny from '../../assets/images/nanny.png';
import Banner from '../../assets/images/banner.png';
import Alert from '../../assets/images/alert.png';
import Notebook from '../../assets/images/notebook.png';

import {ReactComponent as HapuLogo} from '../../assets/icons/logo.svg';
import {ReactComponent as PlayButtonIcon} from '../../assets/icons/play-button.svg';

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
        <S.TwoColumnsSection isMain>
          <S.SectionInfo>
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <h3>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </h3>
            <S.PlayButton>
              <PlayButtonIcon />
              <a href="/">See hapu in action (27 seconds)</a>
            </S.PlayButton>
          </S.SectionInfo>
          <img src={Alert} alt="Alert nanny" />
        </S.TwoColumnsSection>
      </S.MainSection>
      <S.NanyAvailableSection>
        <img src={Nanny} alt="Avatar nanny" />
        <a href="/">Sarah’s day care available now in North Sydney</a>
        <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
      </S.NanyAvailableSection>
      <S.SectionsContainer>
        <S.TwoColumnsSection>
          <S.InfoParagraph>
            <h4>Share your home, nanny and costs</h4>
            <p>
              You have a fantastic home, a fantastic nanny and wouldn’t
              cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents
              to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles
              that empowers you to create and manage your own tribe. A tribe that together has
              the power to create new affordable solutions in childcare that work for you and your community.
            </p>
            <a href="/">Ready to get started?</a>
          </S.InfoParagraph>
          <img src={Notebook} alt="Notebook with nanny location" />
        </S.TwoColumnsSection>
      </S.SectionsContainer>
    </S.Content>
  );
}