import React from 'react';
import * as S from './styles';

import Nanny from '../../assets/images/nanny.png';
import Banner from '../../assets/images/banner.png';
import Alert from '../../assets/images/alert.png';
import Notebook from '../../assets/images/notebook.png';
import Calculate from '../../assets/images/calculate.png';
import NannyTable from '../../assets/images/nanny-table.png';

import {ReactComponent as PlayButtonIcon} from '../../assets/icons/play-button.svg';
import {ReactComponent as PhoneIcon} from '../../assets/icons/phone.svg';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function LandingPage(): JSX.Element {
  return (
    <S.Content>
      <S.MainSection>
        <S.BannerImage src={Banner} />
        <Header />
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
          <img className="alert-nanny" src={Alert} alt="Alert nanny" />
        </S.TwoColumnsSection>
      </S.MainSection>
      <S.SectionsContainer>
      <S.NanyAvailableSection>
        <div className="nanny-container">
          <img src={Nanny} alt="Avatar nanny" />
          <a href="/">Sarah’s day care available now in North Sydney</a>
          <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
        </div>
      </S.NanyAvailableSection>
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
        <hr />
        <S.OneColumnSection>
          <h4>Are you a parent without a nanny and looking to share?</h4>
          <h5>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</h5>
          <ContactForm />
        </S.OneColumnSection>
        <hr />
        <S.TwoColumnsSection>
          <img src={Calculate} alt="Calculate nanny price" />
          <S.InfoParagraph>
            <h4>Shared payments made simple</h4>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill.
              Try sharing that bill week in, week out and you might encounter more than a few snares.
              But not with Hapu. Simply set your rates and our automated payment
              system takes care of the rest. You need never talk money or who owes what.
            </p>
            <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
          </S.InfoParagraph>
        </S.TwoColumnsSection>
        <hr />
        <S.OneColumnSection>
          <h4>A framework built for the long term</h4>
          <p>
            Childcare is for the long term. And you need a framework you can count
            on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of participation.
          </p>
          <a href="/">Read how Hapu’s tribal background defines our app </a>
        </S.OneColumnSection>
        <img className="nanny-table" src={NannyTable} alt="Table of nanny prices" />
        <hr style={{marginTop: '100px'}} />
        <S.OneColumnSection>
          <PhoneIcon />
          <h4>Coming soon: Nanny Share Daily Diary!</h4>
          <p>
            With the Hapu daily diary your nanny will be able to update you and your
            sharers with photos and commentary of the day. You and sharers will
            receive notifications and you’ll be able to login to view the daily adventures
            fo your little ones. We can’t wait!
          </p>
        </S.OneColumnSection>
      </S.SectionsContainer>
      <Footer />
    </S.Content>
  );
}